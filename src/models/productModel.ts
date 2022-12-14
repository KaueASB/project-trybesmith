import { ResultSetHeader } from 'mysql2';
import { IProducts } from '../interfaces/interface';
import connection from './connection';

const productModel = {
  async create({ name, amount }: IProducts) {
    const sql = 'insert into Trybesmith.Products (name, amount) values (?, ?)';
    const result = await connection.query<ResultSetHeader>(sql, [name, amount]);
    const [{ insertId }] = result;
    return { id: insertId, name, amount };
  },

  async getAll(): Promise<IProducts[]> {
    const sql = 'select * from Trybesmith.Products';
    const result = await connection.query(sql);
    const [rows] = result;
    return rows as [];
  },
};

export default productModel;