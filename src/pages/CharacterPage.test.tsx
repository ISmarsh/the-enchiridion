import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { CharacterPage } from './CharacterPage';

function renderAtRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/characters" element={<div>Characters list</div>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('CharacterPage', () => {
  it('renders character name for a known ID', () => {
    renderAtRoute('/characters/finn');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Finn the Human');
  });

  it('shows description', () => {
    renderAtRoute('/characters/finn');
    expect(screen.getByText(/last human in the Land of Ooo/)).toBeInTheDocument();
  });

  it('renders aliases as badges', () => {
    renderAtRoute('/characters/finn');
    expect(screen.getByText('Finn Mertens')).toBeInTheDocument();
    expect(screen.getByText('The Human')).toBeInTheDocument();
  });

  it('shows sibling relationships as links', () => {
    renderAtRoute('/characters/finn');
    // "Jake the Dog" appears in both relationships and episodes; scope to the Siblings section
    const siblingsHeading = screen.getByText('Siblings');
    const siblingsSection = siblingsHeading.closest('div')!;
    const jakeLink = siblingsSection.querySelector('a[href="/characters/jake"]');
    expect(jakeLink).toBeInTheDocument();
    expect(jakeLink).toHaveTextContent('Jake the Dog');
  });

  it('redirects to /characters for unknown ID', () => {
    renderAtRoute('/characters/nonexistent');
    expect(screen.getByText('Characters list')).toBeInTheDocument();
  });

  it('renders group members for group characters', () => {
    renderAtRoute('/characters/princesses-group');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Princesses of Ooo');
    const pbLink = screen.getByText('Princess Bubblegum');
    expect(pbLink.closest('a')).toHaveAttribute('href', '/characters/princess-bubblegum');
  });
});
