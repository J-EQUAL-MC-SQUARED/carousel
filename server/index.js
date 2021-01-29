const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const morgan = require('morgan');
const carouselItem = require('../database/Carousel');

const STATIC_DIR = path.resolve('public');
const app = express();
const PORT = 3002;

app.use(express.urlencoded());

app.use(morgan('dev'));

app.get('/api/carousels/:id', (req, res) => {
  const productID = req.params.id;
  carouselItem.find({ product_id: productID })
    .then((response) => res.send(response))
    .catch((err) => console.log(err));
});

app.use('/', expressStaticGzip(STATIC_DIR, {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
}));

app.listen(PORT, () => {
  console.log(`Carousel service listening on port ${PORT}!`);
});
