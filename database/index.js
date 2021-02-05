const { Client } = require('pg');

const client = new Client('postgres://postgres:postgres@localhost:5432/carousel');

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = client;
