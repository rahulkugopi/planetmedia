import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Banner from './Banner';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
  useLocation: () => (jest.fn())
}));

describe('<Banner />', () => {
  test('it should mount', () => {
    render(<Banner />);
    const banner = screen.getByTestId('Banner');
    expect(banner).toBeInTheDocument();
  });  
});