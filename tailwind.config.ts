import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        field: 'var(--field)',
        'field-deep': 'var(--field-deep)',
        slab: 'var(--slab)',
        paper: 'var(--paper)',
        gold: 'var(--gold)',
        fog: 'var(--fog)',
        ink: 'var(--slab)',
      },
      fontFamily: {
        display: ['"Unbounded Variable"', '"Arial Black"', 'system-ui', 'sans-serif'],
        sans: ['"Archivo Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
