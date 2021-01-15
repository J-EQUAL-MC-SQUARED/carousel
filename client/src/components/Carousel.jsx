import React from 'react';
import CarouselItem from './CarouselItem';

const Carousel = ({items}) => {
  return (
    <div>
      {items.map(item => (
        <CarouselItem
          name={item.name}
          price={item.price}
          stars={item.stars}
          imageUrl={item.imageUrl}
          description={item.description}
        />)
      )}
    </div>
  )
};

export default Carousel;
