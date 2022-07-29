export interface IProducts {
  id?: number,
  name: string,
  amount: string
  orderId?: number
}

export interface IUser {
  username: number,
  classe: string,
  level: number
  password?: string
}

export interface IOrder {
  id: number;
  userId: number;
  productsIds: number[];
}
