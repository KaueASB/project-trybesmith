import orderModel from '../models/orderModel';
import { IOrder } from '../interfaces/interface';

const orderService = {
  async getAll(): Promise<IOrder[]> {
    const orders = await orderModel.getAll();
    return orders as [];
  },
};

export default orderService;