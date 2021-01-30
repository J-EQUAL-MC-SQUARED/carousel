import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Controller from '../../client/src/components/Controller';
import sampleRelatedItems from '../sampleData';

describe('<Controller />', () => {
  beforeEach(() => {
    const items = sampleRelatedItems;
    render (<Controller items={items} />);
  });

  test('should render left and right buttons', () => {
    const controller = screen.getByRole('group');
    expect(controller).toContainElement(screen.getByRole('button', { name: 'Left Scroll'}));
    expect(controller).toContainElement(screen.getByRole('button', { name: 'Right Scroll'}));
  });

  test('should begin list at the first item in the carousel', () => {
    const list = screen.getByRole('list');
    expect(list).toHaveStyle({left: '0px'});
  });

  test('should be able to scroll all the way to the end of the carousel and back to the start', () => {
    const rightBtn = screen.getByRole('button', { name: 'Right Scroll'});
    const leftBtn = screen.getByRole('button', { name: 'Left Scroll'})

    fireEvent.click(rightBtn);
    fireEvent.click(rightBtn);
    fireEvent.click(rightBtn);
    expect(screen.getByRole('list')).toHaveStyle({left: '-1350px'});
    fireEvent.click(leftBtn);
    fireEvent.click(leftBtn);
    fireEvent.click(leftBtn);
    expect(screen.getByRole('list')).toHaveStyle({left: '0px'});
  });

  test('should not be able to scroll past the start of the carousel', () => {
    const leftBtn = screen.getByRole('button', { name: 'Left Scroll'});
    expect(leftBtn).toBeDisabled();
    fireEvent.click(leftBtn);
    expect(leftBtn).toBeDisabled();
  });

  test('should not be able to scroll past the end of the carousel', () => {
    const rightBtn = screen.getByRole('button', { name: 'Right Scroll'});
    fireEvent.click(rightBtn);
    fireEvent.click(rightBtn);
    fireEvent.click(rightBtn);
    expect(rightBtn).toBeDisabled();
    fireEvent.click(rightBtn);
    expect(rightBtn).toBeDisabled();
  });

});