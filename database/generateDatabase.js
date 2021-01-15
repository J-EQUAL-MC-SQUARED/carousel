const mongoose = require('mongoose');

const items = [];
// for each field, populate with randomly generated values

const generate = () => {
  for (let i = 0; i < 100; i += 1) {
    const item = {
      product_id: i,
      imageUrl: 'https://picsum.photos/650/460',
      // name: rando name,
      // stars: rando number
      // description: rando description body
    };
    items.push(item);
  }
};

generate();

module.exports = items;
// imageUrl = figure out how to use AWS to make images sit on S3, then get a url
// "https://picsum.photos/650/460"

// name = random name of a product
// adj + adj + noun

// stars = random number 0-5, can be floating point
// Math.random stuff

// description = relatively short description of item
// 

// get generated data, then store into container

// export that container for use elsewhere
