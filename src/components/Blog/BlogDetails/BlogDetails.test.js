import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogDetails from './BlogDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
  useLocation: () => (jest.fn())
}));

describe('<BlogDetails />', () => {
  test('it should mount', () => {
    render(<BlogDetails />);
    const blogDetails = screen.getByTestId('BlogDetails');
    expect(blogDetails).toBeInTheDocument();
  });  
});