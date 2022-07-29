import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/interface';
import connection from './connection';

const userModel = {
  async create({ username, classe, level, password }: IUser) {
    const sql = `insert into Trybesmith.Users ( username, classe, level, password)
    values (?,?,?,?)`;
    const values = [username, classe, level, password];
    const result = await connection.query<ResultSetHeader>(sql, values);
    const [{ insertId }] = result;
    return { id: insertId, username, classe, level };
  },

  async getAll(): Promise<IUser[]> {
    const sql = 'select * from Trybesmith.Users';
    const result = await connection.query(sql);
    const [rows] = result;
    return rows as [];
  },
};

export default userModel;
