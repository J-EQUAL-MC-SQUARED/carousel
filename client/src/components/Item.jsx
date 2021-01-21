import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import Modal from './Modal';

const Item = ({
  imageUrl, name, stars, price, description,
}) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="carousel-list-item">
      <img className="item-img" src={imageUrl} alt="carousel-item" />
      <div className="item-body">
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
};

Item.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
