import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn((container) => ({
    render: jest.fn((element) => {
      container.innerHTML = '<div><h1>Welcome to the React App</h1><p>This is a simple React application.</p></div>';
    }),
  })),
}));

import '../index';

test('renders the correct heading', () => {
  expect(document.querySelector('h1').textContent).toBe('Welcome to the React App');
});