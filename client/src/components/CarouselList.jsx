import React from 'react';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';

const CarouselList = ({ items }) => items.map((item) => (
  <CarouselItem
    name={item.name}
    price={item.price}
    stars={item.stars}
    imageUrl={item.imageUrl}
    description={item.description}
  />
));

CarouselList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarouselList;
