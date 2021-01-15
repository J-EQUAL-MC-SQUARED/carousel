const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const carouselSchema = new mongoose.Schema({
  product_id: { type: Number, index: true },
  imageUrl: String,
  name: String,
  stars: Number,
  description: String,
});

// set mongoDB to not use automatic '_id' index creation
carouselSchema.set('autoIndex', false);

const carouselItem = mongoose.model('carouselItem', carouselSchema);

module.exports = carouselItem;
