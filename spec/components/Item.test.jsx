import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Item from '../../client/src/components/Item';
import sampleRelatedItems from '../sampleData';

const { imageUrl, name, stars, price } = sampleRelatedItems[Math.floor(Math.random() * 9)];
render(<Item
    imageUrl={imageUrl}
    name={name}
    stars={stars}
    price={price}
  />);

describe('<Item />', () => {
  test('should render a product\'s image, name, star rating, and price', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    
    const name = document.querySelector('.item-body-name');
    expect(name).toBeInTheDocument();

    const stars = document.querySelector('#stars-container');
    expect(stars).toBeVisible();

    const price = screen.getByText((content) => content.startsWith('Today: $'));
    expect(price).toBeInTheDocument();
  });
});
