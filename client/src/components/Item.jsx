import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import Modal from './Modal';

const Item = ({
  imageUrl, name, stars, price, description,
}) => (

  <div className="carousel-list-item" role="listitem">
    <img className="carousel-item-image" src={imageUrl} alt="carousel-item" />
    <div className="carousel-item-body">
      <div className="item-body-name">
        {name}
      </div>
      <div className="item-body-stars">
        <Stars stars={stars} />
      </div>
      <div className="item-body-price">
        {`Today: $${price}`}
      </div>
    </div>
    <Modal description={description} />
  </div>
);

Item.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
