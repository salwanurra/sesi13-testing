import { render, screen } from '@testing-library/react';
import HomePage from './pages/HomePage';

test('renders description Home Page', () => {
  render(<HomePage />);
  const text = screen.getByText(/To guarantee our code/i);
  expect(text).toBeInTheDocument();
});