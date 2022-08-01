import { Request, Response } from 'express';
import loginService from '../services/loginService';
import userService from '../services/userService';

const loginController = {
  async login(req: Request, res: Response) {
    await loginService.validateLogin(req.body);
    const user = await userService.findOne(req.body);

    const { password, ...data } = user;
    const token = loginService.createToken(data);

    res.status(200).json({ token });
  },
};

export default loginController;