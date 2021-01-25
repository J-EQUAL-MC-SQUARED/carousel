const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const carouselSchema = new mongoose.Schema({
  product_id: { type: Number, index: true },
  relatedItems: Array,
});

carouselSchema.set('autoIndex', false);

const carouselItem = mongoose.model('carouselItem', carouselSchema);

module.exports = carouselItem;
