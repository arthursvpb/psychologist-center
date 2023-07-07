import { Sequelize } from 'sequelize-typescript';

import config from './config';

export const sequelize = new Sequelize(config);
