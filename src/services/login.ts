import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/interface';

const JWT_SECRET = 'MINHASENHASECRETA';

const ValidateToken = {
  createToken(user: IUser) {
    const token = jwt.sign({ user }, JWT_SECRET);
    return token;
  },
};

export default ValidateToken;
