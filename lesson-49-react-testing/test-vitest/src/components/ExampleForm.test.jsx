import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import ExampleForm from './ExampleForm.jsx';

describe('ExampleForm', () => {

  test('renders successfully', () => {
    render(<ExampleForm />)

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Age')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Repeat password')).toBeInTheDocument();
  })

  test('Username validation required should work', async () => {
    render(<ExampleForm />)
    // const usernameInput = screen.getByRole('text', { name: /username/i }); // теж спрацює
    const usernameInput = screen.getByPlaceholderText('Username');

    fireEvent.focus(usernameInput);
    fireEvent.blur(usernameInput);

    const errorBlock = await screen.findByText('Username is required');
    expect(errorBlock).toBeInTheDocument();
  })

  test('Username validation minimum 5 symbols should work', async () => {
    render(<ExampleForm />)
    const usernameInput = screen.getByPlaceholderText('Username');

    fireEvent.input(usernameInput, {
      target: {
        value: 'qqq'
      }
    });

    fireEvent.blur(usernameInput)


    await waitFor( async () => {
      const errorBlock = await screen.findByText('Username should be at least 5 symbols');
      expect(errorBlock).toBeInTheDocument();
    });


    fireEvent.input(usernameInput, {
      target: {
        value: 'qwerty'
      }
    });

    await waitFor( async () => {
      const errorBlock = await screen.findByText('Username should be at least 5 symbols');
      expect(errorBlock).not.toBeInTheDocument();
    });


  })

})