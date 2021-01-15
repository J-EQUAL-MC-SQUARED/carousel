const mongoose = require('mongoose');
const utils = require('./utils.js');
const carouselItem = require('./Carousel.js');

const seedData = [];

const generate = () => {
  for (let i = 0; i < 100; i += 1) {
    const item = {
      product_id: i,
      imageUrl: 'https://picsum.photos/650/460',
      name: utils.randomName(),
      stars: utils.randomStars(),
      description: utils.randomDescription(),
    };
    seedData.push(item);
  }
};

generate();

const seedCarouselDB = () => {
  carouselItem.create(seedData)
    .then(() => mongoose.connection.close())
    .catch(() => console.log('error seeding db.'));
};

seedCarouselDB();
