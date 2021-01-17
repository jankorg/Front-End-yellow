import React from 'react';
import { render, screen } from '@testing-library/react';
import 'src/components/Detail/node_modules/@testing-library/jest-dom/extend-expect';
import Results from './Results';

describe('<Results />', () => {
  test('it should mount', () => {
    render(<Results />);
    
    const results = screen.getByTestId('Results');

    expect(results).toBeInTheDocument();
  });
});