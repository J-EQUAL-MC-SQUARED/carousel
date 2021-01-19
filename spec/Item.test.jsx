import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Item from '../client/src/components/Item';
import sampleRelatedItems from './sampleData';

describe('<Item />', () => {
  beforeEach(() => {
    const { imageUrl, name, stars, price } = sampleRelatedItems[Math.floor(Math.random() * 9)];
    render(<Item
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

  // TODO: tests for stars, price
});
