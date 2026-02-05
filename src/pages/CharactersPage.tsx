import { PageHeader } from '@/components/PageHeader';

export function CharactersPage() {
  return (
    <div>
      <PageHeader
        title="Characters"
        subtitle="Meet the heroes, villains, and everyone in between from the Land of Ooo."
        centered={false}
      />
      {/* Character grid will go here */}
    </div>
  );
}
