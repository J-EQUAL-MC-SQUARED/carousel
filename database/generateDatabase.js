const mongoose = require('mongoose');
const carouselItem = require('./Carousel');

// use carouselItem model
// for each field, populate with randomly generated values

// product_id = 1-100
// imageUrl = figure out how to use AWS to make images sit on S3, then get a url
// name = random name of a product
// stars = random number 0-5, can be floating point
// description = relatively short description of item

// get generated data, then store into container

// export that container for use elsewhere
