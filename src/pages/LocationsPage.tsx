import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import locations from '@/data/locations.json';
import characters from '@/data/characters.json';
import type { Location, Character, LocationCategory } from '@/types';

const CATEGORY_OPTIONS: { id: LocationCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'kingdom', label: 'Kingdoms' },
  { id: 'dimension', label: 'Dimensions' },
  { id: 'landmark', label: 'Landmarks' },
];

export function LocationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<LocationCategory | 'all'>('all');
  const [search, setSearch] = useState('');

  const characterMap = useMemo(() => {
    const map = new Map<string, Character>();
    for (const c of characters as Character[]) {
      map.set(c.id, c);
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    let list = locations as Location[];
    if (selectedCategory !== 'all') {
      list = list.filter((loc) => loc.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (loc) =>
          loc.name.toLowerCase().includes(q) ||
          loc.description.toLowerCase().includes(q) ||
          (loc.characterIds ?? []).some((id) =>
            characterMap.get(id)?.name.toLowerCase().includes(q),
          ),
      );
    }
    return list;
  }, [selectedCategory, search, characterMap]);

  const kingdoms = filtered.filter((loc) => loc.category === 'kingdom');
  const dimensions = filtered.filter((loc) => loc.category === 'dimension');
  const landmarks = filtered.filter((loc) => loc.category === 'landmark');

  const categoryLabel =
    selectedCategory === 'all'
      ? 'All'
      : selectedCategory === 'kingdom'
        ? 'Kingdoms'
        : selectedCategory === 'dimension'
          ? 'Dimensions'
          : 'Landmarks';

  return (
    <div>
      <PageHeader title={`${categoryLabel} (${filtered.length})`} centered={false} />

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div className="relative flex-1">
          <Search
            className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search locations..."
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
          No locations match your search.
        </p>
      )}

      {kingdoms.length > 0 && (
        <section>
          {selectedCategory === 'all' && (
            <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
              <span>Kingdoms</span>
              <div className="ornamental-rule flex-1" aria-hidden="true" />
            </h2>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            {kingdoms.map((loc) => (
              <LocationCard key={loc.id} location={loc} characterMap={characterMap} />
            ))}
          </div>
        </section>
      )}

      {dimensions.length > 0 && (
        <section className={kingdoms.length > 0 ? 'mt-8' : ''}>
          {selectedCategory === 'all' && (
            <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
              <span>Dimensions</span>
              <div className="ornamental-rule flex-1" aria-hidden="true" />
            </h2>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            {dimensions.map((loc) => (
              <LocationCard key={loc.id} location={loc} characterMap={characterMap} />
            ))}
          </div>
        </section>
      )}

      {landmarks.length > 0 && (
        <section className={kingdoms.length > 0 || dimensions.length > 0 ? 'mt-8' : ''}>
          {selectedCategory === 'all' && (
            <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
              <span>Landmarks</span>
              <div className="ornamental-rule flex-1" aria-hidden="true" />
            </h2>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            {landmarks.map((loc) => (
              <LocationCard key={loc.id} location={loc} characterMap={characterMap} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function LocationCard({
  location,
  characterMap,
}: {
  location: Location;
  characterMap: Map<string, Character>;
}) {
  const charIds = location.characterIds ?? [];
  const epCount = location.episodeIds?.length ?? 0;

  return (
    <Link
      to={`/locations/${location.id}`}
      className="row-span-3 grid grid-rows-[subgrid] rounded-lg border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="flex items-center justify-between gap-2 border-b border-border/50 px-4 py-3">
        <h3 className="font-medium text-card-foreground">{location.name}</h3>
        <div className="flex shrink-0 items-center gap-1.5">
          {epCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {epCount} ep{epCount !== 1 ? 's' : ''}
            </Badge>
          )}
          <Badge variant="default" className="text-xs">
            {location.category}
          </Badge>
        </div>
      </div>
      <p className="px-4 py-3 text-sm text-muted-foreground">{location.description}</p>
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
