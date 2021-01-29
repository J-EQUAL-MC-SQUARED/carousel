import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';

const params = (new URL(window.location)).searchParams;
const product = params.get('product');
const ID = product >= 0 ? +product : 99;

ReactDOM.render(<Carousel productId={ID} />, document.getElementById('carousels-section'));
