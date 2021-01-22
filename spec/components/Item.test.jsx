import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Item from '../../client/src/components/Item';
import sampleRelatedItems from '../sampleData';

describe('<Item />', () => {
  beforeEach(() => {
    const { imageUrl, name, stars, price, description } = sampleRelatedItems[Math.floor(Math.random() * 9)];
    render(<Item
      imageUrl={imageUrl}
      name={name}
      stars={stars}
      price={price}
      description={description}
    />);
  });

  test('should render a product\'s image, name, star rating, price and description', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    
    const name = document.querySelector('.item-body-name');
    expect(name).toBeInTheDocument();

    const stars = document.querySelector('#stars-container');
    expect(stars).toBeVisible();

    const price = screen.getByText((content) => content.startsWith('Today: $'));
    expect(price).toBeInTheDocument();

    /* 
     * NOTE: due to the way Jest or testing-library creates a 'mock' DOM, it cannot import carouselStyles.css,
     * thus the styles defined for .carousel-modal and .carousel-item-image,
     * which handle the modal's main behavior, are not applied.
     * Therefore, this breaks the hover-and-appear functionality of the Modal component,
     * and leaves no straightforward way to test that functionality here.
    */
    const modal = screen.getByRole('tooltip');
    expect(modal).toBeVisible();
  });

});
