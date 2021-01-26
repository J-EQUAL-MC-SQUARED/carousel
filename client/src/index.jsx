import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';

const ID = window.PRODUCT_ID < 0 || 99;

ReactDOM.render(<Carousel productId={ID} />, document.getElementById('carousels-section'));
