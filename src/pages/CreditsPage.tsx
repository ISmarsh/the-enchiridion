export function CreditsPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-3xl font-bold">Credits & Licenses</h1>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">This Project</h2>
        <p className="text-muted-foreground">
          {/* TODO: Update with your license */}
          This project is licensed under the MIT License.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Data Sources</h2>
        <p className="mb-4 text-muted-foreground">
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
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">About This Project</h2>
        <p className="text-muted-foreground">
          A fan-curated guide to Adventure Time, Distant Lands, and Fionna and Cake. This is an
          independent project and is not affiliated with Cartoon Network or Warner Bros.
        </p>
      </section>
    </div>
  );
}
