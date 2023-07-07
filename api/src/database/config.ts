import { SequelizeOptions } from 'sequelize-typescript';

const sequelizeOptions: SequelizeOptions = {
  database: 'pc_db',
  dialect: 'mysql',
  username: 'root',
  password: 'docker',
  models: [`${__dirname}/../models/*.ts`],
};

export default sequelizeOptions;
