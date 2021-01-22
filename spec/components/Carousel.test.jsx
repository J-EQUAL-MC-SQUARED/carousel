import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Carousel from '../../client/src/components/Carousel';

describe('<Carousel />', () => {
  test('should render a carousel to the page', () => {
    render(<Carousel />);
    expect(document.getElementById('carousel-main')).toBeInTheDocument();
    expect(document.getElementById('carousel-title')).not.toBeEmptyDOMElement();
    expect(document.getElementById('carousel-controller')).toBeInTheDocument();
  });
});