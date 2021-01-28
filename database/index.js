const mongoose = require('mongoose');

const mongoUri = 'mongodb://172.17.0.3:27017/carouselDB';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log('Problem connecting to MongoDB'));

module.exports = db;
