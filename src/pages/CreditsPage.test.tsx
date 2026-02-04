import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CreditsPage } from './CreditsPage';

describe('CreditsPage', () => {
  it('renders the credits heading', () => {
    render(<CreditsPage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Credits & Licenses');
  });

  it('renders the license section', () => {
    render(<CreditsPage />);

    expect(screen.getByRole('heading', { name: /^this project$/i })).toBeInTheDocument();
    expect(screen.getByText(/MIT License/i)).toBeInTheDocument();
  });

  it('renders TMDB attribution', () => {
    render(<CreditsPage />);

    expect(screen.getByRole('heading', { name: /data sources/i })).toBeInTheDocument();
    expect(screen.getByText(/TMDB API/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /TMDB Logo/i })).toBeInTheDocument();
  });

  it('renders about section', () => {
    render(<CreditsPage />);

    expect(screen.getByRole('heading', { name: /about this project/i })).toBeInTheDocument();
    expect(screen.getByText(/Adventure Time/i)).toBeInTheDocument();
  });
});
