import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Carousel from '../../client/src/components/Carousel';

describe('<Carousel />', () => {
  test('should render a carousel to the page', () => {
    render(<Carousel title='Test title carousel'/>);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading')).not.toBeEmptyDOMElement();
    expect(screen.getByRole('scrollbar')).toBeInTheDocument();
  });
});