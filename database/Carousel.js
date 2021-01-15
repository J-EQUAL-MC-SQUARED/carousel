const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const carouselSchema = new mongoose.Schema({
  product_id: { type: Number, index: true },
  relatedItems: Array,
  // imageUrl: String,
  // name: String,
  // stars: Number,
  // description: String,
});

carouselSchema.set('autoIndex', false);

const carouselItem = mongoose.model('carouselItem', carouselSchema);

module.exports = carouselItem;
