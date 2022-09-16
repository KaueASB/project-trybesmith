import Joi from 'joi';
import jwt from 'jsonwebtoken';
import ThrowsErrors from '../errors/ThrowErrors';
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

  async validateToken(tokenHeader: unknown): Promise<string> {
    if (!tokenHeader) throw new ThrowsErrors('NotFoundError', 'Token not found');
    
    const schema = Joi.string().required();
    const result = await schema.validateAsync(tokenHeader);

    const [token] = result.split(' ');
    return token;
  },

  async verifyToken(token: string): Promise<string | jwt.JwtPayload> {
    const data = jwt.verify(token, JWT_SECRET);
    return data;
  },
};

export default loginService;
