import { Request, Response } from 'express';

import userService from '../services/userService';

const userController = {
  async create(req: Request, res: Response) {
    await userService.validateFields(req.body);
    const token = await userService.create(req.body);
    res.status(201).json({ token });
  },
};

export default userController;
