import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Controller from '../client/src/components/Controller';
import sampleRelatedItems from './sampleData';

describe('<Controller />', () => {
  beforeEach(() => {
    const items = sampleRelatedItems;
    render (<Controller items={items} />);
  });

  test('should render left and right buttons', () => {
    const controller = document.getElementById('carousel-controller');
    expect(controller).toContainElement(document.getElementById('left-btn'));
    expect(controller).toContainElement(document.getElementById('right-btn'));
  });

  test('should begin list at the first item in the carousel', () => {
    const list = document.getElementById('carousel-list');
    expect(list).toHaveStyle({left: '0px'});
  });

  test('should be able to scroll all the way to the end of the carousel and back to the start', () => {
    const rightBtn = document.getElementById('right-btn');
    fireEvent.click(rightBtn);
    fireEvent.click(rightBtn);
    fireEvent.click(rightBtn);
    expect(document.getElementById('carousel-list')).toHaveStyle({left: '-1350px'});
    const leftBtn = document.getElementById('left-btn');
    fireEvent.click(leftBtn);
    fireEvent.click(leftBtn);
    fireEvent.click(leftBtn);
    expect(document.getElementById('carousel-list')).toHaveStyle({left: '0px'});
  });

  test('should not be able to scroll past the start of the carousel', () => {
    const leftBtn = document.getElementById('left-btn');
    expect(leftBtn).toBeDisabled();
    fireEvent.click(leftBtn);
    expect(leftBtn).toBeDisabled();
  });

  test('should not be able to scroll past the end of the carousel', () => {
    const rightBtn = document.getElementById('right-btn');
    fireEvent.click(rightBtn);
    fireEvent.click(rightBtn);
    fireEvent.click(rightBtn);
    expect(rightBtn).toBeDisabled();
    fireEvent.click(rightBtn);
    expect(rightBtn).toBeDisabled();
  })

});