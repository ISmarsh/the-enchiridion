import { BookOpen, Users, Route, MapPin, Music } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { SectionCard } from '@/components/SectionCard';

export function HomePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="The Enchiridion"
        subtitle="Your guide to Adventure Time, Distant Lands, and Fionna and Cake."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <SectionCard
          to="/episodes"
          icon={BookOpen}
          title="Episodes"
          description="279 episodes across 10 seasons, plus specials and spinoffs"
        />
        <SectionCard
          to="/characters"
          icon={Users}
          title="Characters"
          description="Heroes, villains, and everyone in between"
        />
        <SectionCard
          to="/storylines"
          icon={Route}
          title="Storylines"
          description="Major story arcs from the Lich to Simon & Betty"
        />
        <SectionCard
          to="/locations"
          icon={MapPin}
          title="Locations"
          description="Kingdoms, dimensions, and landmarks across Ooo and beyond"
        />
        <SectionCard
          to="/songs"
          icon={Music}
          title="Songs"
          description="Music from the series with links to tabs and demos"
        />
      </div>
    </div>
  );
}
