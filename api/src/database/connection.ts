import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  port: 3306,
  host: '127.0.0.1',
  database: 'pc_db',
  dialect: 'mysql',
  username: 'root',
  password: 'docker',
  models: [`${__dirname}/../models/**/*.ts`],
  logging: true,
});
