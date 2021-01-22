import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import List from '../../client/src/components/List';
import sampleRelatedItems from '../sampleData';

describe('<List />', () => {
  beforeEach(() => {
    const items = sampleRelatedItems;
    const list = document.createElement('div')
    list.setAttribute('data-testid', 'carousel-list');

    const { container } = render(<List items={items}/>, {
      container: document.body.appendChild(list),
    });
  });

  test('should render a list of CarouselItems', () => {
    const list = screen.getByTestId('carousel-list');
    expect(list).toBeInTheDocument();
    const carouselItems = screen.getAllByRole('listitem');
    carouselItems.forEach(item => {
      expect(list).toContainElement(item);
    });
  });

  // this is test is a bit arbitrary, mostly for learning Jest/RTL
  test('should have at least 10 CarouselItems in the list', () => {
    const carouselItems = screen.getAllByRole('listitem');
    expect(carouselItems).toHaveLength(10);
  });

});