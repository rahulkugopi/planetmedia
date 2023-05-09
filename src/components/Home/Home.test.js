import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
  useLocation: () => (jest.fn())
}));

describe('<Home />', () => {
  test('it should mount', () => {
    render(<Home />);
    const home = screen.getByTestId('Home');
    expect(home).toBeInTheDocument();
  });  
});