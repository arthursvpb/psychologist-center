import express from 'express';

import { sequelize } from './database/connection';

const app = express();

(async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error(error);
  }
})();

app.get('/', (_, res) => res.send('Hello World!'));

app.listen(8080, () => console.log('✨ Listening...'));
