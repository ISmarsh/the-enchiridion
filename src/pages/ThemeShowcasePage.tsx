import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/hooks/useTheme';

const CHARACTER_THEMES = [
  { id: 'finn', label: 'Finn' },
  { id: 'jake', label: 'Jake' },
  { id: 'bubblegum', label: 'Princess Bubblegum' },
  { id: 'marceline', label: 'Marceline' },
  { id: 'bmo', label: 'BMO' },
  { id: 'iceking', label: 'Ice King' },
  { id: 'flame', label: 'Flame Princess' },
  { id: 'lsp', label: 'LSP' },
  { id: 'simon', label: 'Simon Petrikov' },
  { id: 'lemongrab', label: 'Lemongrab' },
  { id: 'prismo', label: 'Prismo' },
] as const;

const KINGDOM_THEMES = [
  { id: 'grasslands', label: 'Grass Lands' },
  { id: 'candy', label: 'Candy Kingdom' },
  { id: 'ice', label: 'Ice Kingdom' },
  { id: 'fire', label: 'Fire Kingdom' },
  { id: 'slime', label: 'Slime Kingdom' },
  { id: 'nightosphere', label: 'Nightosphere' },
] as const;

const PALETTE_VARIANTS = ['primary', 'secondary', 'accent', 'dark'] as const;

const ENCHIRIDION_SWATCHES = [
  { label: 'brown', className: 'bg-enchiridion-brown' },
  { label: 'gold', className: 'bg-enchiridion-gold' },
  { label: 'parchment', className: 'bg-enchiridion-parchment' },
  { label: 'leather', className: 'bg-enchiridion-leather' },
  { label: 'sword', className: 'bg-enchiridion-sword' },
  { label: 'gem', className: 'bg-enchiridion-gem' },
  { label: 'dark', className: 'bg-enchiridion-dark' },
] as const;

function ColorSwatch({
  label,
  style,
  className,
}: {
  label: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`h-12 w-12 rounded-md border border-border ${className ?? ''}`}
        style={style}
      />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export function ThemeShowcasePage() {
  const { theme, setTheme } = useTheme();
  const paletteKey = theme;

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold">Theme Showcase</h1>
        <p className="text-muted-foreground">
          Select a theme to preview. The entire page updates to reflect the chosen theme.
        </p>
      </div>

      <div>
        <label htmlFor="theme-select" className="mr-2 text-sm font-medium">
          Theme
        </label>
        <select
          id="theme-select"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="rounded-md border border-input bg-background px-3 py-1.5 text-sm"
        >
          <optgroup label="Enchiridion">
            <option value="enchiridion">Enchiridion</option>
          </optgroup>
          <optgroup label="Characters">
            {CHARACTER_THEMES.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </optgroup>
          <optgroup label="Kingdoms">
            {KINGDOM_THEMES.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div data-testid="theme-preview">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Theme Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Raw palette colors */}
            <div className="flex flex-wrap gap-3">
              {paletteKey === 'enchiridion'
                ? ENCHIRIDION_SWATCHES.map(({ label, className }) => (
                    <ColorSwatch key={label} label={label} className={className} />
                  ))
                : PALETTE_VARIANTS.map((variant) => (
                    <ColorSwatch
                      key={variant}
                      label={variant}
                      style={{
                        backgroundColor: `hsl(var(--${paletteKey}-${variant}))`,
                      }}
                    />
                  ))}
            </div>

            <Separator />

            {/* Semantic token swatches */}
            <div className="flex flex-wrap gap-3">
              <ColorSwatch label="background" className="bg-background" />
              <ColorSwatch label="foreground" className="bg-foreground" />
              <ColorSwatch label="primary" className="bg-primary" />
              <ColorSwatch label="secondary" className="bg-secondary" />
              <ColorSwatch label="muted" className="bg-muted" />
              <ColorSwatch label="accent" className="bg-accent" />
              <ColorSwatch label="destructive" className="bg-destructive" />
              <ColorSwatch label="border" className="bg-border" />
              <ColorSwatch label="card" className="bg-card" />
            </div>

            <Separator />

            {/* Component previews */}
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="secondary">
                Secondary
              </Button>
              <Button size="sm" variant="outline">
                Outline
              </Button>
              <Button size="sm" variant="ghost">
                Ghost
              </Button>
              <Button size="sm" variant="destructive">
                Destructive
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-foreground">Foreground text</p>
              <p className="text-muted-foreground">Muted foreground text</p>
              <p className="text-primary">Primary text</p>
              <p className="inline-block rounded bg-accent px-2 text-accent-foreground">
                Accent foreground on accent
              </p>
            </div>

            <Separator />

            {/* Ornamental rule preview */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Ornamental Rule</p>
              <div className="ornamental-rule" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
