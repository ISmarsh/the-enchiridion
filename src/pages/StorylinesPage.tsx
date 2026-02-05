import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import storylines from '@/data/storylines.json';
import characters from '@/data/characters.json';
import type { Storyline, Character, StorylineCategory } from '@/types';

const CATEGORY_OPTIONS: { id: StorylineCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'major', label: 'Major' },
  { id: 'minor', label: 'Minor' },
];

export function StorylinesPage() {
  const [selectedCategory, setSelectedCategory] = useState<StorylineCategory | 'all'>('all');
  const [search, setSearch] = useState('');

  const characterMap = useMemo(() => {
    const map = new Map<string, Character>();
    for (const c of characters as Character[]) {
      map.set(c.id, c);
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    let list = storylines as Storyline[];
    if (selectedCategory !== 'all') {
      list = list.filter((sl) => sl.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (sl) =>
          sl.name.toLowerCase().includes(q) ||
          sl.description.toLowerCase().includes(q) ||
          (sl.characterIds ?? []).some((id) =>
            characterMap.get(id)?.name.toLowerCase().includes(q),
          ),
      );
    }
    // Sort by episode count descending
    list = [...list].sort((a, b) => (b.episodeOrder?.length ?? 0) - (a.episodeOrder?.length ?? 0));
    return list;
  }, [selectedCategory, search, characterMap]);

  const major = filtered.filter((sl) => sl.category === 'major');
  const minor = filtered.filter((sl) => sl.category === 'minor');

  const categoryLabel =
    selectedCategory === 'all' ? 'All' : selectedCategory === 'major' ? 'Major' : 'Minor';

  return (
    <div>
      <PageHeader title={`${categoryLabel} Storylines (${filtered.length})`} centered={false} />

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div className="relative flex-1">
          <Search
            className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search storylines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="flex gap-1.5">
          {CATEGORY_OPTIONS.map(({ id, label }) => (
            <Button
              key={id}
              size="sm"
              variant={selectedCategory === id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(id)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No storylines match your search.
        </p>
      )}

      {major.length > 0 && (
        <section>
          {selectedCategory === 'all' && (
            <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
              <span>Major Arcs</span>
              <div className="ornamental-rule flex-1" aria-hidden="true" />
            </h2>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            {major.map((sl) => (
              <StorylineCard key={sl.id} storyline={sl} characterMap={characterMap} />
            ))}
          </div>
        </section>
      )}

      {minor.length > 0 && (
        <section className={major.length > 0 ? 'mt-8' : ''}>
          {selectedCategory === 'all' && (
            <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
              <span>Minor Arcs</span>
              <div className="ornamental-rule flex-1" aria-hidden="true" />
            </h2>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            {minor.map((sl) => (
              <StorylineCard key={sl.id} storyline={sl} characterMap={characterMap} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function StorylineCard({
  storyline,
  characterMap,
}: {
  storyline: Storyline;
  characterMap: Map<string, Character>;
}) {
  const charIds = storyline.characterIds ?? [];
  const epCount = storyline.episodeOrder?.length ?? 0;

  return (
    <Link
      to={`/storylines/${storyline.id}`}
      className="row-span-3 grid grid-rows-[subgrid] rounded-lg border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="flex items-center justify-between gap-2 border-b border-border/50 px-4 py-3">
        <h3 className="font-medium text-card-foreground">{storyline.name}</h3>
        <div className="flex shrink-0 items-center gap-1.5">
          {epCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {epCount} ep{epCount !== 1 ? 's' : ''}
            </Badge>
          )}
          <Badge variant="default" className="text-xs">
            {storyline.category}
          </Badge>
        </div>
      </div>
      <p className="px-4 py-3 text-sm text-muted-foreground">{storyline.description}</p>
      {charIds.length > 0 && (
        <div className="flex flex-wrap items-start gap-1.5 px-4 pb-3">
          {charIds.map((id) => {
            const char = characterMap.get(id);
            if (!char) return null;
            return (
              <Badge key={id} variant="secondary" className="text-xs">
                {char.name}
              </Badge>
            );
          })}
        </div>
      )}
    </Link>
  );
}
