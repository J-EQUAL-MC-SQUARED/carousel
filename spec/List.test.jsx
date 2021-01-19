import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import List from '../client/src/components/List';
import sampleRelatedItems from './sampleData';

describe('<List />', () => {
  beforeEach(() => {
    const items = sampleRelatedItems;
    const list = document.createElement('div')
    list.setAttribute('id', 'carousel-list');

    const { container } = render(<List items={items}/>, {
      container: document.body.appendChild(list),
    });
  });

  test('should render a list of CarouselItems', () => {
    const list = document.querySelector('#carousel-list');
    expect(list).toBeInTheDocument();
    const carouselItems = document.getElementsByClassName('carousel-list-item');
    const items = Array.from(carouselItems);
    items.forEach(item => {
      expect(list).toContainElement(item);
    });
  });

  // this is test is a bit arbitrary, mostly for learning Jest/RTL
  test('should have at least 10 CarouselItems in the list', () => {
    const carouselItems = document.getElementsByClassName('carousel-list-item');
    expect(carouselItems).toHaveLength(10);
  });

});