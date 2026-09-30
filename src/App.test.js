import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the software engineer portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Building thoughtful.*web products/i);
  expect(screen.getByRole('link', { name: /view my work/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/#about');
  expect(screen.getByText(/Anna University Regional Office/)).toBeInTheDocument();
});
