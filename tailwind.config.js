/** @type {import('tailwindcss').Config} */
export default {
  // Theming via data-theme attribute on <html>
  // CSS variables in index.css define per-theme colors
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        enchiridion: {
          brown: 'hsl(var(--enchiridion-brown))',
          gold: 'hsl(var(--enchiridion-gold))',
          parchment: 'hsl(var(--enchiridion-parchment))',
          leather: 'hsl(var(--enchiridion-leather))',
          sword: 'hsl(var(--enchiridion-sword))',
          gem: 'hsl(var(--enchiridion-gem))',
          dark: 'hsl(var(--enchiridion-dark))',
        },
        finn: {
          DEFAULT: 'hsl(var(--finn-primary))',
          secondary: 'hsl(var(--finn-secondary))',
          accent: 'hsl(var(--finn-accent))',
          dark: 'hsl(var(--finn-dark))',
        },
        jake: {
          DEFAULT: 'hsl(var(--jake-primary))',
          secondary: 'hsl(var(--jake-secondary))',
          accent: 'hsl(var(--jake-accent))',
          dark: 'hsl(var(--jake-dark))',
        },
        bubblegum: {
          DEFAULT: 'hsl(var(--bubblegum-primary))',
          secondary: 'hsl(var(--bubblegum-secondary))',
          accent: 'hsl(var(--bubblegum-accent))',
          dark: 'hsl(var(--bubblegum-dark))',
        },
        marceline: {
          DEFAULT: 'hsl(var(--marceline-primary))',
          secondary: 'hsl(var(--marceline-secondary))',
          accent: 'hsl(var(--marceline-accent))',
          dark: 'hsl(var(--marceline-dark))',
        },
        bmo: {
          DEFAULT: 'hsl(var(--bmo-primary))',
          secondary: 'hsl(var(--bmo-secondary))',
          accent: 'hsl(var(--bmo-accent))',
          dark: 'hsl(var(--bmo-dark))',
        },
        iceking: {
          DEFAULT: 'hsl(var(--iceking-primary))',
          secondary: 'hsl(var(--iceking-secondary))',
          accent: 'hsl(var(--iceking-accent))',
          dark: 'hsl(var(--iceking-dark))',
        },
        flame: {
          DEFAULT: 'hsl(var(--flame-primary))',
          secondary: 'hsl(var(--flame-secondary))',
          accent: 'hsl(var(--flame-accent))',
          dark: 'hsl(var(--flame-dark))',
        },
        lsp: {
          DEFAULT: 'hsl(var(--lsp-primary))',
          secondary: 'hsl(var(--lsp-secondary))',
          accent: 'hsl(var(--lsp-accent))',
          dark: 'hsl(var(--lsp-dark))',
        },
        simon: {
          DEFAULT: 'hsl(var(--simon-primary))',
          secondary: 'hsl(var(--simon-secondary))',
          accent: 'hsl(var(--simon-accent))',
          dark: 'hsl(var(--simon-dark))',
        },
        lemongrab: {
          DEFAULT: 'hsl(var(--lemongrab-primary))',
          secondary: 'hsl(var(--lemongrab-secondary))',
          accent: 'hsl(var(--lemongrab-accent))',
          dark: 'hsl(var(--lemongrab-dark))',
        },
        prismo: {
          DEFAULT: 'hsl(var(--prismo-primary))',
          secondary: 'hsl(var(--prismo-secondary))',
          accent: 'hsl(var(--prismo-accent))',
          dark: 'hsl(var(--prismo-dark))',
        },
        grasslands: {
          DEFAULT: 'hsl(var(--grasslands-primary))',
          secondary: 'hsl(var(--grasslands-secondary))',
          accent: 'hsl(var(--grasslands-accent))',
          dark: 'hsl(var(--grasslands-dark))',
        },
        candy: {
          DEFAULT: 'hsl(var(--candy-primary))',
          secondary: 'hsl(var(--candy-secondary))',
          accent: 'hsl(var(--candy-accent))',
          dark: 'hsl(var(--candy-dark))',
        },
        ice: {
          DEFAULT: 'hsl(var(--ice-primary))',
          secondary: 'hsl(var(--ice-secondary))',
          accent: 'hsl(var(--ice-accent))',
          dark: 'hsl(var(--ice-dark))',
        },
        fire: {
          DEFAULT: 'hsl(var(--fire-primary))',
          secondary: 'hsl(var(--fire-secondary))',
          accent: 'hsl(var(--fire-accent))',
          dark: 'hsl(var(--fire-dark))',
        },
        slime: {
          DEFAULT: 'hsl(var(--slime-primary))',
          secondary: 'hsl(var(--slime-secondary))',
          accent: 'hsl(var(--slime-accent))',
          dark: 'hsl(var(--slime-dark))',
        },
        nightosphere: {
          DEFAULT: 'hsl(var(--nightosphere-primary))',
          secondary: 'hsl(var(--nightosphere-secondary))',
          accent: 'hsl(var(--nightosphere-accent))',
          dark: 'hsl(var(--nightosphere-dark))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        serif: ['"Palatino Linotype"', 'Palatino', '"Book Antiqua"', 'Georgia', 'serif'],
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
