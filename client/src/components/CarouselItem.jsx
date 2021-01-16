import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = ({
  imageUrl, name, stars, price,
}) => (

  <div clasName="carousel-list-item">
    <img className="item-img" src={imageUrl} alt="error" />
    <div className="item-body">
      <div className="item-body-description">
        {name}
      </div>
      <div className="item-body-stars">
        {`Stars: ${stars}`}
      </div>
      <div className="item-body-price">
        {`Price: ${price}`}
      </div>
    </div>
  </div>
);

CarouselItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CarouselItem;
