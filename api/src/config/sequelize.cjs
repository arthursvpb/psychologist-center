module.exports = {
  host: 'localhost',
  database: 'pc_db',
  dialect: 'mysql',
  username: 'root',
  password: 'docker',
  models: [`${__dirname}/../models/**/*.ts`],
};
