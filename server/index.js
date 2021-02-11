require('newrelic');
require('dotenv').config();
const Fastify = require('fastify');
const path = require('path');
const controller = require('./controller');
const { cache } = require('./middleware/cache');

// eslint-disable-next-line no-unused-vars
const db = require('../database');

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const PORT = process.env.PORT;

async function build() {
  const fastify = Fastify({ logger: true });
  await fastify.register(require('middie'))
  fastify.use(require('compression')());
  return fastify;
}

build()
  .then((fastify) => {
    fastify.addHook('onRequest', cache);
    fastify.get('/api/carousels/:id', controller.getRelated);
    fastify.listen(PORT, '0.0.0.0', () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((err) => {
    throw err;
  })
