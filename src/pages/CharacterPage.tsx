import { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronDown, Search, X } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { EpisodeCard } from '@/components/EpisodeCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Character, Episode, Series } from '@/types';
import {
  buildCharacterMap,
  buildCharacterEpisodesMap,
  buildCharacterStorylinesMap,
  buildReverseVariantMap,
  buildGroupMembershipMap,
} from '@/lib/character-utils';

const SERIES_LABEL: Record<Series, string> = {
  'adventure-time': 'Adventure Time',
  'distant-lands': 'Distant Lands',
  'fionna-and-cake': 'Fionna & Cake',
};

export function CharacterPage() {
  const { id } = useParams<{ id: string }>();

  const characterMap = useMemo(() => buildCharacterMap(), []);
  const episodesMap = useMemo(() => buildCharacterEpisodesMap(), []);
  const storylinesMap = useMemo(() => buildCharacterStorylinesMap(), []);
  const reverseVariantMap = useMemo(() => buildReverseVariantMap(), []);
  const groupMembershipMap = useMemo(() => buildGroupMembershipMap(), []);

  const character = id ? characterMap.get(id) : undefined;

  if (!character) {
    return <Navigate to="/characters" replace />;
  }

  const charEpisodes = episodesMap.get(character.id) ?? [];
  const charStorylines = storylinesMap.get(character.id) ?? [];

  return (
    <div>
      <PageHeader title={character.name} subtitle={character.description} centered={false} />

      {/* Metadata */}
      <div className="mb-8 space-y-3">
        {character.aliases && character.aliases.length > 0 && (
          <div>
            <h2 className="mb-1.5 text-sm font-medium text-muted-foreground">Also known as</h2>
            <div className="flex flex-wrap gap-1.5">
              {character.aliases.map((alias) => (
                <Badge key={alias} variant="secondary">
                  {alias}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="mb-1.5 text-sm font-medium text-muted-foreground">Appears in</h2>
          <div className="flex flex-wrap gap-1.5">
            {character.series.map((s) => (
              <Badge key={s} variant="secondary">
                {SERIES_LABEL[s]}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Variant relationship */}
      {character.type === 'individual' && character.variantOf && (
        <VariantLink variantOf={character.variantOf} characterMap={characterMap} />
      )}

      {/* Reverse variants */}
      {(reverseVariantMap.get(character.id)?.length ?? 0) > 0 && (
        <div className="mb-8">
          <h2 className="mb-1.5 text-sm font-medium text-muted-foreground">Variants</h2>
          <div className="flex flex-wrap gap-2">
            {reverseVariantMap.get(character.id)!.map((v) => (
              <Link key={v.id} to={`/characters/${v.id}`}>
                <Badge
                  variant="secondary"
                  className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {v.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Group membership */}
      {(groupMembershipMap.get(character.id)?.length ?? 0) > 0 && (
        <div className="mb-8">
          <h2 className="mb-1.5 text-sm font-medium text-muted-foreground">Groups</h2>
          <div className="flex flex-wrap gap-2">
            {groupMembershipMap.get(character.id)!.map((g) => (
              <Link key={g.id} to={`/characters/${g.id}`}>
                <Badge
                  variant="secondary"
                  className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {g.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Family relationships */}
      {character.type === 'individual' && (
        <RelationshipsSection character={character} characterMap={characterMap} />
      )}

      {/* Group members */}
      {character.type === 'group' && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>Members</span>
            <div className="ornamental-rule flex-1" aria-hidden="true" />
          </h2>
          <div className="flex flex-wrap gap-2">
            {character.memberIds.map((memberId) => {
              const member = characterMap.get(memberId);
              if (!member) return null;
              return (
                <Link key={memberId} to={`/characters/${memberId}`}>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {member.name}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Storylines */}
      {charStorylines.length > 0 && (
        <CollapsibleSection title="Storylines" count={charStorylines.length} collapseThreshold={4}>
          <div className="space-y-3">
            {charStorylines.map((sl) => (
              <div key={sl.id} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-medium text-card-foreground">{sl.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {sl.category}
                  </Badge>
                </div>
                {sl.description && (
                  <p className="mt-1 text-sm text-muted-foreground">{sl.description}</p>
                )}
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Episodes */}
      {charEpisodes.length > 0 && <EpisodesSection episodes={charEpisodes} />}
    </div>
  );
}

function CollapsibleSection({
  title,
  count,
  collapseThreshold,
  children,
}: {
  title: string;
  count: number;
  collapseThreshold: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(count <= collapseThreshold);

  return (
    <section className="mb-8">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mb-4 flex w-full cursor-pointer items-center gap-3 text-left text-lg font-semibold"
        aria-expanded={open}
      >
        <span>{title}</span>
        <div className="ornamental-rule flex-1" aria-hidden="true" />
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && children}
    </section>
  );
}

function EpisodesSection({ episodes }: { episodes: Episode[] }) {
  const [search, setSearch] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<Series | 'all'>('all');
  const [collapsedSeasons, setCollapsedSeasons] = useState<Set<string>>(new Set());

  const toggleSeason = (key: string) => {
    setCollapsedSeasons((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const seriesInEpisodes = useMemo(() => {
    const set = new Set(episodes.map((ep) => ep.series));
    return [...set] as Series[];
  }, [episodes]);

  const showSeriesFilter = seriesInEpisodes.length > 1;

  const filtered = useMemo(() => {
    let eps = episodes;
    if (selectedSeries !== 'all') {
      eps = eps.filter((ep) => ep.series === selectedSeries);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      eps = eps.filter(
        (ep) => ep.title.toLowerCase().includes(q) || ep.synopsis?.toLowerCase().includes(q),
      );
    }
    return eps;
  }, [episodes, selectedSeries, search]);

  const grouped = useMemo(() => groupBySeriesAndSeason(filtered), [filtered]);

  const allSeasonKeys = useMemo(() => Array.from(grouped.keys()), [grouped]);
  const allCollapsed =
    allSeasonKeys.length > 0 && allSeasonKeys.every((k) => collapsedSeasons.has(k));
  const toggleAllSeasons = () => {
    setCollapsedSeasons(allCollapsed ? new Set() : new Set(allSeasonKeys));
  };

  return (
    <CollapsibleSection
      title={`Episodes (${episodes.length})`}
      count={episodes.length}
      collapseThreshold={10}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="relative flex-1">
          <Search
            className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search episodes..."
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
        {showSeriesFilter && (
          <div className="flex gap-1.5">
            <Button
              size="sm"
              variant={selectedSeries === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedSeries('all')}
            >
              All
            </Button>
            {seriesInEpisodes.map((s) => (
              <Button
                key={s}
                size="sm"
                variant={selectedSeries === s ? 'default' : 'outline'}
                onClick={() => setSelectedSeries(s)}
              >
                {SERIES_LABEL[s]}
              </Button>
            ))}
          </div>
        )}
        <Button size="sm" variant="ghost" onClick={toggleAllSeasons}>
          {allCollapsed ? 'Expand all' : 'Collapse all'}
        </Button>
      </div>
      {filtered.length === 0 ? (
        <p className="py-4 text-center text-sm text-muted-foreground">
          No episodes match your search.
        </p>
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([key, eps]) => {
            const firstEp = eps[0];
            const isOpen = !collapsedSeasons.has(key);
            return (
              <section key={key}>
                <button
                  type="button"
                  onClick={() => toggleSeason(key)}
                  className="mb-3 flex w-full cursor-pointer items-center gap-2 text-left text-sm font-medium text-muted-foreground"
                  aria-expanded={isOpen}
                >
                  <span>
                    {SERIES_LABEL[firstEp.series]} &mdash; Season {firstEp.seasonNumber}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {eps.map((ep) => (
                      <EpisodeCard key={ep.id} episode={ep} />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </CollapsibleSection>
  );
}

function VariantLink({
  variantOf,
  characterMap,
}: {
  variantOf: string;
  characterMap: Map<string, Character>;
}) {
  const original = characterMap.get(variantOf);
  if (!original) return null;

  return (
    <div className="mb-8">
      <h2 className="mb-1.5 text-sm font-medium text-muted-foreground">Variant of</h2>
      <Link to={`/characters/${variantOf}`}>
        <Badge
          variant="secondary"
          className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {original.name}
        </Badge>
      </Link>
    </div>
  );
}

function RelationshipsSection({
  character,
  characterMap,
}: {
  character: { parentIds?: string[]; siblingIds?: string[]; childIds?: string[] };
  characterMap: Map<string, Character>;
}) {
  const hasAny =
    (character.parentIds?.length ?? 0) > 0 ||
    (character.siblingIds?.length ?? 0) > 0 ||
    (character.childIds?.length ?? 0) > 0;

  if (!hasAny) return null;

  return (
    <section className="mb-8">
      <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
        <span>Relationships</span>
        <div className="ornamental-rule flex-1" aria-hidden="true" />
      </h2>
      <div className="space-y-4">
        <RelationshipLinks
          label="Parents"
          ids={character.parentIds ?? []}
          characterMap={characterMap}
        />
        <RelationshipLinks
          label="Siblings"
          ids={character.siblingIds ?? []}
          characterMap={characterMap}
        />
        <RelationshipLinks
          label="Children"
          ids={character.childIds ?? []}
          characterMap={characterMap}
        />
      </div>
    </section>
  );
}

function RelationshipLinks({
  label,
  ids,
  characterMap,
}: {
  label: string;
  ids: string[];
  characterMap: Map<string, Character>;
}) {
  const resolved = ids.map((id) => characterMap.get(id)).filter(Boolean);
  if (resolved.length === 0) return null;

  return (
    <div>
      <h3 className="mb-1.5 text-sm font-medium text-muted-foreground">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {resolved.map((rel) => (
          <Link key={rel!.id} to={`/characters/${rel!.id}`}>
            <Badge
              variant="secondary"
              className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {rel!.name}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}

function groupBySeriesAndSeason(episodes: Episode[]): Map<string, Episode[]> {
  const groups = new Map<string, Episode[]>();
  for (const ep of episodes) {
    const key = `${ep.series}-s${ep.seasonNumber}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(ep);
  }
  for (const eps of groups.values()) {
    eps.sort((a, b) => a.episodeNumber - b.episodeNumber);
  }
  return groups;
}
