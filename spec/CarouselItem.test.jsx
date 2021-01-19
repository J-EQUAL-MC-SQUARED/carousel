import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CarouselItem from '../client/src/components/CarouselItem';
import sampleRelatedItems from './sampleData';

describe('<CarouselItem />', () => {
  beforeEach(() => {
    const { imageUrl, name, stars, price } = sampleRelatedItems[Math.floor(Math.random() * 9)];
    render(<CarouselItem
      imageUrl={imageUrl}
      name={name}
      stars={stars}
      price={price}
      />);
  });
  
  test('should render an image', () => {
    const image = document.querySelector('.item-img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
    expect(image.getAttribute('src')).not.toBeUndefined();
  });

  test('should render a name', () => {
    const name = document.querySelector('.item-body-name');
    expect(name).toBeInTheDocument();
    expect(name).not.toBeEmptyDOMElement();
  });

  // tests for stars, price
});
