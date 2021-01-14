// import mongoose and carousel Model
const db = require('./index.js');
const carouselItem = require('./Carousel.js');

// get the generated data from generator
// TODO: const seedData = data from generateDatabase

// take the entire array and generate documents in mongo
const seedCarouselDB = function() {
  carouselItem.create(seedData);
};

// seedCarouselDB();
