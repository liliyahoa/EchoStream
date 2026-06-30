// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EchoStream title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EchoStream/i);
    expect(titleElement).toBeInTheDocument();
});
