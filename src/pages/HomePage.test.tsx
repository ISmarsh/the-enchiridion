import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { HomePage } from './HomePage';

function renderWithRouter(component: React.ReactNode) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

describe('HomePage', () => {
  it('renders the main heading', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Enchiridion');
  });

  it('renders all section cards', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByText('Episodes')).toBeInTheDocument();
    expect(screen.getByText('Characters')).toBeInTheDocument();
    expect(screen.getByText('Storylines')).toBeInTheDocument();
    expect(screen.getByText('Songs')).toBeInTheDocument();
  });

  it('renders navigation links to each section', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByRole('link', { name: /episodes/i })).toHaveAttribute('href', '/episodes');
    expect(screen.getByRole('link', { name: /characters/i })).toHaveAttribute(
      'href',
      '/characters',
    );
    expect(screen.getByRole('link', { name: /storylines/i })).toHaveAttribute(
      'href',
      '/storylines',
    );
    expect(screen.getByRole('link', { name: /songs/i })).toHaveAttribute('href', '/songs');
  });
});
