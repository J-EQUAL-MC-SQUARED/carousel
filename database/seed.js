const mongoose = require('mongoose');
const utils = require('./utils.js');
const carouselItem = require('./Carousel.js');

const seedData = [];

const generate = () => {
  for (let i = 0; i < 100; i += 1) {
    const relatedItems = [];
    let count = 10;

    while (count > 0) {
      const item = {
        imageUrl: 'https://picsum.photos/650/460',
        name: utils.randomName(),
        stars: utils.randomStars(),
        description: utils.randomDescription(),
      };
      relatedItems.push(item);
      count -= 1;
    }

    const product = {
      product_id: i,
      relatedItems,
    };
    seedData.push(product);
  }
};

generate();

const seedCarouselDB = () => {
  carouselItem.create(seedData)
    .then(() => mongoose.connection.close())
    .catch(() => console.log('error seeding db.'));
};

seedCarouselDB();
