import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Items from './Items';

describe('<Items />', () => {
  test('it should mount', () => {
    render(<Items />);
    
    const items = screen.getByTestId('Items');

    expect(items).toBeInTheDocument();
  });
});