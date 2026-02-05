import { Link } from 'react-router-dom';

interface SectionCardProps {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function SectionCard({ to, icon: Icon, title, description }: SectionCardProps) {
  return (
    <Link to={to} className="group rounded-lg border border-border bg-card p-6">
      <Icon className="mb-3 h-8 w-8 text-primary" />
      <h2 className="text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
        {title}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
