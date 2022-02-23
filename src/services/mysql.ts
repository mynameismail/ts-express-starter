import { Sequelize } from 'sequelize';

const uri = process.env.MYSQL_URI || 'mysql://root@localhost:3306/dbname';
export const sequelize = new Sequelize(uri);
