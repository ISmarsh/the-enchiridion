import { Outlet, Link, NavLink } from 'react-router-dom';
import { BookOpen, Users, Route, Music } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const GITHUB_URL = 'https://github.com/ISmarsh/the-enchiridion';

const navItems = [
  { to: '/episodes', label: 'Episodes', icon: BookOpen },
  { to: '/characters', label: 'Characters', icon: Users },
  { to: '/storylines', label: 'Storylines', icon: Route },
  { to: '/songs', label: 'Songs', icon: Music },
];

export function Layout() {
  // Apply theme attribute to <html> on mount
  useTheme();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary-hover">
            The Enchiridion
          </Link>

          <nav className="flex items-center gap-1 sm:gap-4">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )
                }
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-border">
        <div className="container mx-auto flex items-center justify-center gap-4 px-4 py-6 text-sm text-muted-foreground">
          <Link to="/credits" className="underline hover:text-foreground">
            Credits & Licenses
          </Link>
          <span aria-hidden="true">&middot;</span>
          <Link to="/themes" className="underline hover:text-foreground">
            Themes
          </Link>
          <span aria-hidden="true">&middot;</span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
