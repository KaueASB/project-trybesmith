import { Request, Response } from 'express';
import { IReqUser } from '../interfaces/interface';

import orderService from '../services/orderService';

const orderController = {
  async getAll(_req: Request, res: Response) {
    const orders = await orderService.getAll();
    res.status(200).json(orders);
  },

  async create(req: IReqUser, res: Response) {
    const { user } = req;
    res.status(200).json({ teste: user });
  },
};

export default orderController;
