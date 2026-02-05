import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function CreditsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <PageHeader title="Credits & Licenses" />

      <Card>
        <CardHeader>
          <h2 className="font-semibold leading-none tracking-tight">This Project</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This project is licensed under the MIT License.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="font-semibold leading-none tracking-tight">Data Sources</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-medium">Episode Data</h3>
            <p className="mb-2 text-muted-foreground">
              This product uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="TMDB Logo"
                className="h-6"
              />
            </a>
          </div>

          <div>
            <h3 className="mb-2 font-medium">Character & Storyline Data</h3>
            <p className="mb-2 text-muted-foreground">
              Character descriptions and storyline summaries are AI-generated based on publicly
              available information, including content from the{' '}
              <a
                href="https://adventuretime.fandom.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Adventure Time Wiki
              </a>{' '}
              (licensed under{' '}
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CC-BY-SA 3.0
              </a>
              ).
            </p>
            <p className="text-sm text-muted-foreground">
              AI assistance provided by Claude (Anthropic). Descriptions may contain inaccuracies.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="font-semibold leading-none tracking-tight">About This Project</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            A fan-curated guide to Adventure Time, Distant Lands, and Fionna and Cake. This is an
            independent project and is not affiliated with Cartoon Network or Warner Bros.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
