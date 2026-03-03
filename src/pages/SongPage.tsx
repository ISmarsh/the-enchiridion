import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Badge } from '@/components/ui/badge';
import songs from '@/data/songs.json';
import episodes from '@/data/episodes.json';
import type { Song, Episode, Series } from '@/types';

const SERIES_LABEL: Record<Series, string> = {
  'adventure-time': 'Adventure Time',
  'distant-lands': 'Distant Lands',
  'fionna-and-cake': 'Fionna & Cake',
};

export function SongPage() {
  const { id } = useParams<{ id: string }>();

  const songMap = useMemo(() => {
    const map = new Map<string, Song>();
    for (const s of songs as Song[]) {
      map.set(s.id, s);
    }
    return map;
  }, []);

  const episodeMap = useMemo(() => {
    const map = new Map<string, Episode>();
    for (const ep of episodes as Episode[]) {
      map.set(ep.id, ep);
    }
    return map;
  }, []);

  const song = id ? songMap.get(id) : undefined;

  if (!song) {
    return <Navigate to="/songs" replace />;
  }

  const songEpisodes = song.episodeIds
    .map((epId) => episodeMap.get(epId))
    .filter((ep): ep is Episode => ep !== undefined);

  return (
    <div>
      <PageHeader title={song.title} subtitle={song.notes} centered={false} />

      {/* Metadata */}
      <div className="mb-8 space-y-3">
        {song.performer && (
          <div>
            <h2 className="mb-1.5 text-sm font-medium text-muted-foreground">Performer</h2>
            <p className="text-sm text-card-foreground">{song.performer}</p>
          </div>
        )}
        {song.composer && (
          <div>
            <h2 className="mb-1.5 text-sm font-medium text-muted-foreground">Composer</h2>
            <p className="text-sm text-card-foreground">{song.composer}</p>
          </div>
        )}
      </div>

      {/* Episodes */}
      {songEpisodes.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>Episodes</span>
            <div className="ornamental-rule flex-1" aria-hidden="true" />
          </h2>
          <div className="space-y-2">
            {songEpisodes.map((ep) => (
              <div key={ep.id} className="rounded-lg border border-border bg-card px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    S{String(ep.seasonNumber).padStart(2, '0')}E
                    {String(ep.episodeNumber).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-card-foreground">{ep.title}</span>
                  <Badge variant="outline" className="ml-auto text-xs">
                    {SERIES_LABEL[ep.series]}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* External Links */}
      {song.externalLinks && song.externalLinks.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>External Links</span>
            <div className="ornamental-rule flex-1" aria-hidden="true" />
          </h2>
          <div className="space-y-2">
            {song.externalLinks.map((link) => (
              <a
                key={`${link.type}-${link.url}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                <span>{link.label}</span>
                <Badge variant="outline" className="text-xs">
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
