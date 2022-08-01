import userModel from '../models/userModel';
import { ILogin, IUser } from '../interfaces/interface';
import loginService from './loginService';
import ThrowsErrors from '../errors/errors';

const userService = {
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