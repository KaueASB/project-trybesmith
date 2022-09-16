import { NextFunction, Request, Response } from 'express';
import loginService from '../services/loginService';

const tokenMiddleware = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const tokenHeader: unknown = req.headers.authorization;
  const tokenValid: string = await loginService.validateToken(tokenHeader);
  const user = await loginService.verifyToken(tokenValid);
  console.log('user: ', user);
    
  // req.user = user as IUser;
  
  next();
};

export default tokenMiddleware;