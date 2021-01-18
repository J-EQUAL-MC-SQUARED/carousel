import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarouselList from './CarouselList';

const Controller = ({ items }) => {
  const [left, setLeft] = useState(0);

  // refactor into separate components later
  function leftBtn() {
    let btn = '';
    if (left === 0) {
      btn = <button disabled onClick={() => setLeft(left + 450)} type="button">Left</button>;
    } else {
      btn = <button onClick={() => setLeft(left + 450)} type="button">Left</button>;
    }
    return btn;
  }

  function rightBtn() {
    let btn = '';
    if (left === -1350) {
      btn = <button disabled onClick={() => setLeft(left - 450)} type="button">Right</button>;
    } else {
      btn = <button onClick={() => setLeft(left - 450)} type="button">Right</button>;
    }
    return btn;
  }

  return (
    <div id="carousel-controller">
      <div id="carousel-list" style={{ left: `${`${left}px`}` }}>
        <CarouselList items={items} />
      </div>
      {leftBtn()}
      {rightBtn()}
    </div>
  );
};

Controller.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Controller;
