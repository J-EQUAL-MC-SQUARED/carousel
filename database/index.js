const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carouselDB').then(() => console.log('Connected to MongoDB'));

const carouselSchema = new mongoose.Schema({
  product_id: { type: Number, unique: true },
  imageUrl: String,
  name: String,
  stars: Number,
  description: String,
});

const carouselItem = mongoose.model('carouselItem', carouselSchema);

export default carouselItem;
