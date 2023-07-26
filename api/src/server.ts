import express from 'express';
import 'express-async-errors';

import { sequelize } from './database/connection';
import { routes } from './routes';

const app = express();

sequelize.authenticate({ logging: query => console.info(`▶️: ${query}`) });

app.use(express.json());

app.use(routes);
app.get('/', (_, res) => res.send('Hello World!'));

app.listen(8080, () => console.log('✨ Listening...'));
