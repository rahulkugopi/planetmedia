import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from './Gallery';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
  useLocation: () => (jest.fn())
}));

describe('<Gallery />', () => {
  test('it should mount', () => {
    render(<Gallery />);
    const gallery = screen.getByTestId('Gallery');
    expect(gallery).toBeInTheDocument();
  });  
});