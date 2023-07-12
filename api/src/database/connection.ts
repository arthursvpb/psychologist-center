import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  host: 'pc_db',
  database: 'pc_db',
  dialect: 'mysql',
  username: 'root',
  password: 'docker',
  models: [`${__dirname}/../models/**/*.ts`],
});
