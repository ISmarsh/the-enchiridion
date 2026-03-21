import { Outlet, Link, NavLink } from 'react-router-dom';
import { BookOpen, Users, Route, Music } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn, toRomanNumeral } from '@/lib/utils';

const GITHUB_URL = 'https://github.com/samm-the-dev/the-enchiridion';

const navItems = [
  { to: '/episodes', label: 'Episodes', icon: BookOpen, numeral: 1 },
  { to: '/characters', label: 'Characters', icon: Users, numeral: 2 },
  { to: '/storylines', label: 'Storylines', icon: Route, numeral: 3 },
  { to: '/songs', label: 'Songs', icon: Music, numeral: 4 },
];

export function Layout() {
  // Initialize and sync theme attribute on <html>
  useTheme();

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      {/* Header — book title page style */}
      <header className="py-6">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Link to="/" className="group inline-block">
            <h1 className="text-foreground group-hover:text-primary text-2xl font-bold tracking-wide transition-colors sm:text-3xl">
              The Enchiridion
            </h1>
            <p className="text-foreground mt-1 font-serif text-sm italic">
              A Guide to the Land of Ooo
            </p>
          </Link>

          <div className="ornamental-rule mx-auto mt-4 max-w-xs" />

          <nav className="mt-4 flex items-center justify-center gap-1 sm:gap-6">
            {navItems.map(({ to, label, icon: Icon, numeral }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-1 border-b-2 px-1 py-1 text-sm transition-colors sm:px-2',
                    isActive
                      ? 'border-primary text-primary'
                      : 'text-foreground hover:border-primary/30 hover:text-foreground border-transparent',
                  )
                }
              >
                <Icon className="h-4 w-4 sm:hidden" />
                <span className="hidden sm:inline">
                  {toRomanNumeral(numeral)}. {label}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content" className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Outlet />
      </main>

      {/* Footer — colophon style */}
      <footer className="mt-auto py-6">
        <div className="mx-auto max-w-4xl px-4">
          <div className="ornamental-rule mx-auto mb-4 max-w-xs" />
          <div className="text-foreground flex items-center justify-center gap-4 font-serif text-sm">
            <Link to="/credits" className="hover:text-foreground">
              Credits & Licenses
            </Link>
            <span aria-hidden="true">&middot;</span>
            <Link to="/themes" className="hover:text-foreground">
              Themes
            </Link>
            <span aria-hidden="true">&middot;</span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
