import { render, screen } from '@testing-library/react';
import TodosPage from './pages/TodosPage';

test('renders table Todos Page', () => {
  render(<TodosPage />);
  const text = screen.getByText(/To Do List/i);
  expect(text).toBeInTheDocument();
});
