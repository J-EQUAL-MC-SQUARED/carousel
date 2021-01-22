import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ description }) => (
  <div className="carousel-modal" role="tooltip">
    <div>
      {`${description}`}
    </div>
  </div>
);

Modal.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Modal;
