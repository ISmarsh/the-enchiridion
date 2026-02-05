import { PageHeader } from '@/components/PageHeader';

export function SongsPage() {
  return (
    <div>
      <PageHeader
        title="Songs"
        subtitle="Music from the series with links to tabs and demos."
        centered={false}
      />
      {/* Song list will go here */}
    </div>
  );
}
