import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogTileView from './BlogTileView';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
  useLocation: () => (jest.fn())
}));

describe('<BlogTileView />', () => {
  test('it should mount', () => {
    render(<BlogTileView />);
    const blogTileView = screen.getByTestId('BlogTileView');
    expect(blogTileView).toBeInTheDocument();
  });  
});