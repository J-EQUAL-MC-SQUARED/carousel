import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Controller = ({ items }) => {
  const [left, setLeft] = useState(0);

  // refactor into separate components later
  function leftBtn() {
    let btn = '';
    if (left === 0) {
      btn = <button disabled id="left-btn" onClick={() => setLeft(left + 450)} type="button">LEFT</button>;
    } else {
      btn = <button id="left-btn" onClick={() => setLeft(left + 450)} type="button">
        <svg id="carousel-left-arrow" viewBox="0 0 24 24">
        </svg>
      </button>;
    }
    return btn;
  }

  function rightBtn() {
    let btn = '';
    if (left === -1350) {
      btn = <button disabled id="right-btn" onClick={() => setLeft(left - 450)} type="button">Right</button>;
    } else {
      btn = <button id="right-btn" onClick={() => setLeft(left - 450)} type="button">Right</button>;
    }
    return btn;
  }

  return (
    <div id="carousel-controller">
      <div id="carousel-list" style={{ left: `${`${left}px`}` }}>
        <List items={items} />
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
