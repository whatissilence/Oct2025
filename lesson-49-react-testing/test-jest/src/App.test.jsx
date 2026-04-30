import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  // Перевіряємо відображення статичних елементів
  describe('Static Content', () => {
    test('renders Get started heading', () => {
      render(<App/>)
      const linkElement = screen.getByText(/Get started/i)
      expect(linkElement).toBeInTheDocument()
    })

    test('renders instruction to click logos', () => {
      render(<App/>)
      const instructionElement = screen.getByText(/Your questions, answered/i)
      expect(instructionElement).toBeInTheDocument()
    })
  })

  // Перевіряємо інтерактивні елементи
  describe('Interactive Elements', () => {
    test('counter increments when button is clicked', () => {
      render(<App/>)
      const button = screen.getByRole('button')
      expect(button).toHaveTextContent('Count is 0')

      fireEvent.click(button)
      expect(button).toHaveTextContent('Count is 1')
    })
  })
})