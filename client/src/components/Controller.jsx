import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarouselList from './CarouselList';

const Controller = ({ items }) => {
  const [left, setLeft] = useState(0);

  return (
    <div id="carousel-controller">
      <div id="carousel-list" style={{ left: `${`${left}px`}` }}>
        <CarouselList items={items} />
      </div>
      <button onClick={() => setLeft(left - 600)} type="button"> Left </button>
      <button onClick={() => setLeft(left + 600)} type="button"> Right </button>
    </div>
  );
};

Controller.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Controller;
