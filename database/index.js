const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/carousel');

sequelize.authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
