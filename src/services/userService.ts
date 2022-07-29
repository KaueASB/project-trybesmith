import userModel from '../models/userModel';
import { IUser } from '../interfaces/interface';
import ValidateToken from './login';

const userService = {
  async create(user: IUser): Promise<string> {
    const newUser = await userModel.create(user);
    const token = await ValidateToken.createToken(newUser);
    return token;
  },
};

export default userService;