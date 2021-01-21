import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ description }) => (
  <div className="carousel-modal">
    {`Modal test ${description}`}
  </div>
);

Modal.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Modal;
