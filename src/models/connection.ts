import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const { DB_HOSTNAME, DB_USER, DB_PASS } = process.env;

const connection = mysql.createPool({
  host: DB_HOSTNAME,
  user: DB_USER,
  password: DB_PASS,
});

export default connection;