import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the HOME link in the navigation bar', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const homeLink = screen.getByText(/HOME/i);
  expect(homeLink).toBeInTheDocument();
});

test('renders the RESERVATIONS link in the navigation bar', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const reservationsLink = screen.getByText(/RESERVATIONS/i);
  expect(reservationsLink).toBeInTheDocument();
});
