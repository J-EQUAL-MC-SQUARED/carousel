import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Controller = ({ items }) => {
  const [left, setLeft] = useState(0);

  // refactor into separate components later
  function leftBtn() {
    let btn = '';
    if (left === 0) {
      btn = (
        <button disabled id="left-btn" onClick={() => setLeft(left + 450)} type="button">
          <svg id="carousel-left-arrow" viewBox="0 0 24 24">
            <title>Left Scroll</title>
            <path d="M 17 2 L7 12 l 10 10" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      );
    } else {
      btn = (
        <button id="left-btn" onClick={() => setLeft(left + 450)} type="button">
          <svg id="carousel-left-arrow" viewBox="0 0 24 24">
            <title>Left Scroll</title>
            <path d="M 17 2 L7 12 l 10 10" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      );
    }
    return btn;
  }

  function rightBtn() {
    let btn = '';
    if (left === -1350) {
      btn = (
        <button disabled id="right-btn" onClick={() => setLeft(left - 450)} type="button">
          <svg id="carousel-right-arrow" viewBox="0 0 24 24">
            <title>Right Scroll</title>
            <path d="M 7 2 l 10 10 L 7 22" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      );
    } else {
      btn = (
        <button id="right-btn" onClick={() => setLeft(left - 450)} type="button">
          <svg id="carousel-right-arrow" viewBox="0 0 24 24">
            <title>Right Scroll</title>
            <path d="M 7 2 l 10 10 L 7 22" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      );
    }
    return btn;
  }

  return (
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    <div id="carousel-controller" role="scrollbar">
      <div id="carousel-list" style={{ left: `${`${left}px`}` }} role="list">
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
