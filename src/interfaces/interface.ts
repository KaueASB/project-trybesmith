import { Request } from 'express';

export interface IProducts {
  id?: number,
  name: string,
  amount: string
  orderId?: number
}

export interface IUser {
  id?: number
  username: string,
  classe: string,
  level: number
  password?: string
}

export interface IOrder {
  id: number;
  userId: number;
  productsIds: number[];
}

export interface ILogin {
  username: string,
  password: string
}

export interface IReqUser extends Request {
  user: {
    id: number,
    username: string,
    classe: string,
    level: number,
  }
}
