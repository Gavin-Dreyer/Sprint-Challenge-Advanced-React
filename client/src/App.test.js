import React from 'react';
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom';
import App from './App';
import SearchBar from './components/SearchBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Search bar button is found', () => {
  const { getByText } = render(<App />)

  getByText(/search name/i)
})


test('Check to see if div containing cards are rendering', () => {
  const { getByTestId } = render(<App />)

  getByTestId(/playerinfotest/i)
})

test('Check to see if cards are rendering', () => {
  const { getAllByRole } = render(<App />)

  getAllByRole('button')
})
