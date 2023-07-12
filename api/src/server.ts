import express from 'express';
import 'express-async-errors';

import { sequelize } from './database/connection';

const app = express();

sequelize.authenticate({ logging: query => console.info(`▶️: ${query}`) });

app.get('/', (_, res) => res.send('Hello World!'));

app.listen(8080, () => console.log('✨ Listening...'));
