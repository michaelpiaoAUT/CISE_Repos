import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

// Test that passes
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Test that passes
it('increments counter correctly', () => {
  const { getByText } = render(<App />);
  const button = getByText(/increment count/i);
  fireEvent.click(button);
  const counter = getByText(/count: 1/i);
  expect(counter).toBeInTheDocument();
});

// Test that fails
it('fails intentionally for demonstration', () => {
  const { getByText } = render(<App />);
  const button = getByText(/increment count/i);
  fireEvent.click(button);
  const counter = getByText(/count: 2/i); 
  expect(counter).toBeInTheDocument();
});
