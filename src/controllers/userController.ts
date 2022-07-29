import { Request, Response } from 'express';

import userService from '../services/userService';

const userController = {
  async create(req: Request, res: Response) {
    const token = await userService.create(req.body);
    res.status(201).json({ token });
  },
};

export default userController;
