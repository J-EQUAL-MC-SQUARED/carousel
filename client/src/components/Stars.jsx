import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({ stars }) => (
  <div id="stars-container">
    <div id="stars-background">
      &#9733;&#9733;&#9733;&#9733;&#9733;
    </div>
    <div id="stars-front" style={{ width: `${stars * 20}%` }}>
      &#9733;&#9733;&#9733;&#9733;&#9733;
    </div>
  </div>
);

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default Stars;
