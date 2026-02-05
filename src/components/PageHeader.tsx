import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function PageHeader({ title, subtitle, centered = true }: PageHeaderProps) {
  return (
    <div className={cn('mb-8', centered && 'text-center')}>
      <h1 className="mb-2 text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mb-4 text-xl text-foreground">{subtitle}</p>}
      <div className={cn('ornamental-rule mx-auto mt-4 max-w-xs', !centered && 'mx-0')} />
    </div>
  );
}
