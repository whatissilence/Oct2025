import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import PostsList from './PostsList';

describe('PostsList Component', () => {

  beforeEach(() => {
    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        {
          id: 1,
          title: 'Test Post title 1',
          body: 'Test Post body 1',
        },
        {
          id: 2,
          title: 'Test Post title 2',
          body: 'Test Post body 2',
        }
      ])
    }))
  })

  afterEach(() => {
    vi.clearAllMocks();
  })

  test('fetches posts and renders correctly', async () => {
    render(<PostsList />)

    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts'
    )

    await waitFor(() => {
      expect(screen.getByText('Test Post title 1')).toBeInTheDocument();
      expect(screen.getByText('Test Post body 1')).toBeInTheDocument();
      expect(screen.getByText('Test Post title 2')).toBeInTheDocument();
      expect(screen.getByText('Test Post body 2')).toBeInTheDocument();
    })
  })

})
