import { Link } from 'react-router-dom';
import { BookOpen, Users, Route, Music } from 'lucide-react';

export function HomePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">The Enchiridion</h1>
        <p className="text-xl text-muted-foreground">
          Your guide to Adventure Time, Distant Lands, and Fionna and Cake.
        </p>
      </div>

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
          to="/songs"
          icon={Music}
          title="Songs"
          description="Music from the series with links to tabs and demos"
        />
      </div>
    </div>
  );
}

function SectionCard({
  to,
  icon: Icon,
  title,
  description,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-primary/5"
    >
      <Icon className="mb-3 h-8 w-8 text-primary" />
      <h2 className="text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
        {title}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
