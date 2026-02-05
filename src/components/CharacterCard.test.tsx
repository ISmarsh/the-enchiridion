import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { CharacterCard } from './CharacterCard';
import type { IndividualCharacter, GroupCharacter } from '@/types';

const individual: IndividualCharacter = {
  id: 'finn',
  name: 'Finn the Human',
  series: ['adventure-time', 'distant-lands'],
  aliases: ['Finn', 'Finn Mertens'],
  description: 'The last human in the Land of Ooo.',
  type: 'individual',
};

const group: GroupCharacter = {
  id: 'princesses-group',
  name: 'Princesses of Ooo',
  series: ['adventure-time'],
  description: 'Various princesses.',
  type: 'group',
  memberIds: ['princess-bubblegum'],
};

describe('CharacterCard', () => {
  it('renders character name as a link', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={individual} episodeCount={42} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Finn the Human')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/characters/finn');
  });

  it('renders description', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={individual} episodeCount={0} />
      </MemoryRouter>,
    );
    expect(screen.getByText('The last human in the Land of Ooo.')).toBeInTheDocument();
  });

  it('renders series badges', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={individual} episodeCount={0} />
      </MemoryRouter>,
    );
    expect(screen.getByText('AT')).toBeInTheDocument();
    expect(screen.getByText('DL')).toBeInTheDocument();
  });

  it('renders episode count when greater than 0', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={individual} episodeCount={42} />
      </MemoryRouter>,
    );
    expect(screen.getByText('42 eps')).toBeInTheDocument();
  });

  it('shows Group badge for group characters', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={group} episodeCount={0} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Group')).toBeInTheDocument();
  });
});
