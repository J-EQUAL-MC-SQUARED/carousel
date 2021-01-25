const express = require('express');
const path = require('path');
const carouselItem = require('../database/Carousel');

const STATIC_DIR = path.resolve('public');
const app = express();
const PORT = 3002;

app.use(express.static(STATIC_DIR));
app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request from ${req.path}`);
  next();
});

// HTTP method handlers here

app.get('/api/products/:id/images', (req, res) => {
  const productID = req.params.id;
  carouselItem.find({ product_id: productID })
    .then((response) => res.send(response))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Carousel service listening on port ${PORT}!`);
});
