import { Sequelize } from 'sequelize-typescript';

import config from '../config/sequelize.cjs';

export const sequelize = new Sequelize({
  ...config,
  host: 'pc_db',
});
