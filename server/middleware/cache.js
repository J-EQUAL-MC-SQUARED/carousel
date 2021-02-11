const { promisify } = require('util');
const redis = require('redis');

const client =  redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

client.on('connect', () => {
  console.log('Connected to Redis')
});

const cache = (req, res, next) => {
  const { id } = req.params;
  client.get(`${id}`, (err, response) => {
    if (err) res.status(500).send(err);

    if (response) {
      res.send([{ relatedItems: JSON.parse(response) }]);
    } else {
      next();
    }
  })
};

module.exports = { cache, client };