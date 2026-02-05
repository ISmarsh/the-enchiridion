import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { SectionCard } from './SectionCard';

function TestIcon({ className }: { className?: string }) {
  return <svg className={className} data-testid="section-icon" />;
}

function renderWithRouter(component: React.ReactNode) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

describe('SectionCard', () => {
  it('renders a link to the given route', () => {
    renderWithRouter(
      <SectionCard to="/episodes" icon={TestIcon} title="Episodes" description="All episodes" />,
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/episodes');
  });

  it('renders the title and description', () => {
    renderWithRouter(
      <SectionCard to="/test" icon={TestIcon} title="My Title" description="My description" />,
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Title');
    expect(screen.getByText('My description')).toBeInTheDocument();
  });

  it('renders the icon', () => {
    renderWithRouter(<SectionCard to="/test" icon={TestIcon} title="Title" description="Desc" />);

    expect(screen.getByTestId('section-icon')).toBeInTheDocument();
  });

  it('applies bg-card class for parchment texture', () => {
    renderWithRouter(<SectionCard to="/test" icon={TestIcon} title="Title" description="Desc" />);

    expect(screen.getByRole('link')).toHaveClass('bg-card');
  });
});
