import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { ThemeShowcasePage } from './ThemeShowcasePage';

describe('ThemeShowcasePage', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('renders the main heading', () => {
    render(<ThemeShowcasePage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Theme Showcase');
  });

  it('renders theme preview card', () => {
    render(<ThemeShowcasePage />);

    expect(screen.getByText('Theme Preview')).toBeInTheDocument();
  });

  it('renders a theme selector with all themes', () => {
    render(<ThemeShowcasePage />);

    const select = screen.getByLabelText('Theme');
    expect(select).toBeInTheDocument();

    // Enchiridion variants
    expect(screen.getByRole('option', { name: 'Enchiridion Dark' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Enchiridion Light' })).toBeInTheDocument();

    // Characters
    expect(screen.getByRole('option', { name: 'Finn' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Prismo' })).toBeInTheDocument();

    // Kingdoms
    expect(screen.getByRole('option', { name: 'Candy Kingdom' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Nightosphere' })).toBeInTheDocument();
  });

  it('renders component previews', () => {
    render(<ThemeShowcasePage />);

    expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Secondary' })).toBeInTheDocument();
    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getAllByText('Outline')).toHaveLength(2); // button + badge
  });
});
