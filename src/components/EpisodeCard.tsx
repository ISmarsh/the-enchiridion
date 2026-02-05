import { Badge } from '@/components/ui/badge';
import type { Episode } from '@/types';

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <div className="row-span-2 grid grid-rows-[subgrid] rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border/50 px-4 py-3">
        <div className="flex items-baseline gap-2">
          <Badge variant="outline" className="shrink-0 font-mono text-xs text-card-foreground">
            E{episode.episodeNumber.toString().padStart(2, '0')}
          </Badge>
          <h3 className="font-medium text-card-foreground">{episode.title}</h3>
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">
          {formatDate(episode.airDate)}
        </span>
      </div>
      {episode.synopsis && (
        <p className="px-4 py-3 text-sm text-muted-foreground">{episode.synopsis}</p>
      )}
    </div>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
