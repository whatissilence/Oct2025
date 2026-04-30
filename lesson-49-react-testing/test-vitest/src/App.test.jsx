import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  describe('Static Content', () => {
    test('renders Get started heading', () => {
      render(<App />);
      const linkElement = screen.getByText(/Get started/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe('Interactive Elements', () => {
    test('counter increments when button is clicked', () => {
      render(<App />);
      const button = screen.getByRole('button', { name: /Count is 0/i });
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(button).toHaveTextContent('Count is 1');
    });
  });
});