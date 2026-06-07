import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Canvas renders a <canvas> element
    const canvas = document.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });
});
