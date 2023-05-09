import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blog from './Blog';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
  useLocation: () => (jest.fn())
}));

describe('<Blog />', () => {
  test('it should mount', () => {
    render(<Blog />);
    const blog = screen.getByTestId('Blog');
    expect(blog).toBeInTheDocument();
  });  
});