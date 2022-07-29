import connection from './connection';
import { IOrder } from '../interfaces/interface';

const orderModel = {
  async getAll(): Promise<IOrder[]> {
    const sql = `select o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
    from Trybesmith.Orders as o
    inner join Trybesmith.Products as p
    on o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId;`;
    const result = await connection.query(sql);
    const [rows] = result;
    return rows as [];
  },
};

export default orderModel;
