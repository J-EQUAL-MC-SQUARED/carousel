import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Modal from '../../client/src/components/Modal';

describe('<Modal />', () => {
  test('should display an item\'s description', () => {
    render(<Modal description={'a description'} />);
    expect(screen.getByRole('tooltip')).toBeVisible();
  });
});