import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { CharacterCard } from '@/components/CharacterCard';
import { Button } from '@/components/ui/button';
import characters from '@/data/characters.json';
import type { Character, Series } from '@/types';
import { buildCharacterEpisodesMap } from '@/lib/character-utils';

const SERIES_OPTIONS: { id: Series | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'adventure-time', label: 'Adventure Time' },
  { id: 'distant-lands', label: 'Distant Lands' },
  { id: 'fionna-and-cake', label: 'Fionna & Cake' },
];

export function CharactersPage() {
  const [selectedSeries, setSelectedSeries] = useState<Series | 'all'>('all');

  const allCharacters = useMemo(() => characters as Character[], []);
  const episodesMap = useMemo(() => buildCharacterEpisodesMap(), []);

  const filteredEpisodeCount = useMemo(() => {
    const counts = new Map<string, number>();
    for (const [charId, eps] of episodesMap) {
      counts.set(
        charId,
        selectedSeries === 'all'
          ? eps.length
          : eps.filter((e) => e.series === selectedSeries).length,
      );
    }
    return counts;
  }, [episodesMap, selectedSeries]);

  const filtered = useMemo(() => {
    const list =
      selectedSeries === 'all'
        ? allCharacters
        : allCharacters.filter((c) => c.series.includes(selectedSeries));
    return list.sort(
      (a, b) => (filteredEpisodeCount.get(b.id) ?? 0) - (filteredEpisodeCount.get(a.id) ?? 0),
    );
  }, [allCharacters, selectedSeries, filteredEpisodeCount]);

  const individuals = filtered.filter((c) => c.type === 'individual');
  const groups = filtered.filter((c) => c.type === 'group');

  return (
    <div>
      <PageHeader
        title="Characters"
        subtitle={`${filtered.length} characters across the Land of Ooo and beyond.`}
        centered={false}
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {SERIES_OPTIONS.map(({ id, label }) => (
          <Button
            key={id}
            size="sm"
            variant={selectedSeries === id ? 'default' : 'outline'}
            onClick={() => setSelectedSeries(id)}
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {individuals.map((c) => (
          <CharacterCard
            key={c.id}
            character={c}
            episodeCount={filteredEpisodeCount.get(c.id) ?? 0}
          />
        ))}
      </div>

      {groups.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>Groups</span>
            <div className="ornamental-rule flex-1" aria-hidden="true" />
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((c) => (
              <CharacterCard key={c.id} character={c} episodeCount={0} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
