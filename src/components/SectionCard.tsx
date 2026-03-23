import type React from 'react';
import { Link } from 'react-router-dom';

interface SectionCardProps {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function SectionCard({ to, icon: Icon, title, description }: SectionCardProps) {
  return (
    <Link to={to} className="group border-border bg-card rounded-lg border p-6">
      <Icon className="text-primary mb-3 h-8 w-8" />
      <h2 className="text-card-foreground group-hover:text-primary text-xl font-semibold transition-colors">
        {title}
      </h2>
      <p className="text-muted-foreground mt-1 text-sm">{description}</p>
    </Link>
  );
}
