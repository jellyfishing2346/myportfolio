# Faizan Khan — Portfolio

Personal portfolio website for Faizan Khan, a software engineer transitioning into quantitative finance. Built to showcase FinTech engineering projects, professional experience, and a distinct personality — not just a resume in webpage form.

**Live:** [myportfolio-xi-liart-28.vercel.app](https://myportfolio-xi-liart-28.vercel.app)

---

## Features

### Core
- Fully responsive with a custom mobile hamburger menu
- Glassmorphism design system with a fixed deep-purple gradient background
- Scroll-triggered card animations via IntersectionObserver
- Open Graph and Twitter Card metadata with avatar image

### Pages
- **Home** — Hero, About, Experience, Projects, Skills, Currently Reading, Contact
- **Blog** — Writing section with individual post pages, tag filtering, read time
- **Personal** — Horror film list with category filters and IMDb links, sports, social life
- **404** — Custom Hannibal Lecter themed error page

### Hannibal Transition
Every nav link triggers a cinematic page transition: the screen fades to black, Hannibal Lecter's face appears dimly in the background, a real audio clip plays, and the matching quote fades in. Navigation fires the moment the audio ends. Four quote/audio pairs, randomly selected on each click.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Language | TypeScript |
| Icons | Lucide React |
| Images | next/image |
| Fonts | Inter (next/font/google) |
| Deployment | Vercel |

---

## Project Structure

```
myportfolio/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx       # Individual blog post
│   │   ├── data.ts            # All post content and metadata
│   │   └── page.tsx           # Blog listing page
│   ├── personal/
│   │   └── page.tsx           # Personal page (films, sports, social)
│   ├── globals.css            # Glassmorphism utilities, animations
│   ├── layout.tsx             # Root layout, metadata, OG config
│   ├── not-found.tsx          # Custom 404 page
│   └── page.tsx               # Home page (all main sections)
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Currently.tsx
│   ├── Experience.tsx
│   ├── GithubIcon.tsx         # Custom SVG (replaces deprecated lucide Github)
│   ├── Hero.tsx
│   ├── Navbar.tsx             # Includes Hannibal transition logic
│   ├── Projects.tsx
│   └── Skills.tsx
└── public/
    ├── avatar.jpg
    ├── hannibal.jpg
    ├── resume.pdf
    ├── transition.mp3
    ├── transition-2.mp3
    ├── transition-3.mp3
    └── transition-4.mp3
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/jellyfishing2346/myportfolio.git
cd myportfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

---

## Design System

### Colors
- Background: `#0f0c29` → `#302b63` → `#24243e` (fixed gradient)
- Accent: Violet (`#a78bfa`, `#818cf8`)
- Text: `slate-300` / `slate-400` / `slate-500`

### Utilities
- `.glass` — frosted glass card (`bg-white/6`, `backdrop-blur-xl`, subtle border)
- `.glass-hover` — lift and border highlight on hover
- `.gradient-text` — white to violet to indigo text gradient

### Animations
- `fade-to-black` — used in page transition overlay
- `quote-appear` — Hannibal quote fade-in with upward drift
- `float`, `float-delayed`, `float-slow` — Hero background orbs
- `slideUp`, `fadeIn` — section entrance animations

---

## Blog

Posts are defined as structured data in `app/blog/data.ts`. Each post is a `Post` object with a `blocks` array of typed content nodes (`p`, `h2`, `callout`). To add a new post, append an entry to the `POSTS` array — routing and the listing page pick it up automatically.

---

## Deployment

Deployed on Vercel. Push to `main` triggers an automatic redeploy.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## License

MIT — see [LICENSE](./LICENSE)
