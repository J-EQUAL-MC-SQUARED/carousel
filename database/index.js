const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  database: 'carousel',
  port: 5432,
  max: 1000,
});

pool.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = pool;
