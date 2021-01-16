import React from 'react';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';

const Carousel = ({ items }) => (
  <div id="carousel-list">
    {items.map((item) => (
      <CarouselItem
        name={item.name}
        price={item.price}
        stars={item.stars}
        imageUrl={item.imageUrl}
        description={item.description}
      />
    ))}
  </div>
);

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
