import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';

ReactDOM.render(<Carousel title="Similar Items" />, document.getElementById('carousel1'));
ReactDOM.render(<Carousel title="Top Sellers" />, document.getElementById('carousel2'));
ReactDOM.render(<Carousel title="Featured Products" />, document.getElementById('carousel3'));
