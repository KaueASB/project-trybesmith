import Joi from 'joi';
import userModel from '../models/userModel';
import { ILogin, IUser } from '../interfaces/interface';
import loginService from './loginService';
import ThrowsErrors from '../errors/ThrowErrors';

const userService = {
  async validateFields(body: IUser): Promise<void> {
    const schema = Joi.object({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3),
      level: Joi.number().greater(0).integer().required()
        .messages({
          'number.greater': '"level" must be greater than or equal to 1',
        }),
      password: Joi.string().required().min(8),
    });
    await schema.validateAsync(body);
  },

  async create(user: IUser): Promise<string> {
    const newUser = await userModel.create(user);
    const token = await loginService.createToken(newUser);
    return token;
  },

  async findOne(data: ILogin): Promise<IUser> {
    const { username, password } = data;
    const user = await userModel.findOne(username);
    if (!user || password !== user.password) {
      throw new ThrowsErrors('UnauthorizedError', 'Username or password invalid');
    }
    return user as IUser;
  },
};

export default userService;