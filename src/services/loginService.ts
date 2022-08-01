import jwt from 'jsonwebtoken';
import ThrowsErrors from '../errors/errors';
import { IUser, ILogin } from '../interfaces/interface';

const JWT_SECRET = process.env.SECRET || 'MINHASENHASECRETA';

const loginService = {
  createToken(user: IUser) {
    const token = jwt.sign({ user }, JWT_SECRET);
    return token;
  },

  async validateLogin({ username, password }: ILogin) {
    if (!username) throw new ThrowsErrors('RequiredError', '"username" is required');
    if (!password) throw new ThrowsErrors('RequiredError', '"password" is required');
  },
};

export default loginService;
