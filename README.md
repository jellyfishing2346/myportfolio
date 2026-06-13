<div align="center">

# 🧠 Faizan Khan — Portfolio

**Software Engineer → Quantitative Finance**

*CS student at Brooklyn College finishing May 2026. Built this to show who I am, not just what I've done.*

[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**[🌐 Live Site](https://myportfolio-xi-liart-28.vercel.app)** &nbsp;·&nbsp; **[📄 Resume](https://myportfolio-xi-liart-28.vercel.app/resume.pdf)** &nbsp;·&nbsp; **[💼 LinkedIn](https://linkedin.com/in/faizan-khan234)** &nbsp;·&nbsp; **[🐙 GitHub](https://github.com/jellyfishing2346)**

</div>

---

## ✨ What makes this different

Most portfolio sites are just resumes with a dark background. This one has a personality.

Every nav link triggers a **cinematic Hannibal Lecter transition** — the screen fades to black, his face appears dimly behind the glass, a real audio clip plays, and the matching quote fades in. Navigation fires the moment the audio ends. Four quote/audio pairs, randomly selected each click.

> *"I do wish we could chat longer, but I'm having an old friend for dinner."*

Yeah. It's that kind of portfolio.

---

## 🗂️ Pages

| Page | What's on it |
|---|---|
| `/` | Hero, About, Experience, Projects, Skills, Currently, Contact |
| `/blog` | Writing on quant finance and ML engineering |
| `/personal` | Horror films with category filters + IMDb links, sports, social |
| `/404` | Custom Hannibal-themed error page because why not |

---

## 🛠️ Tech Stack

```
Next.js 14 (App Router)    →  Framework
TypeScript                  →  Language
Tailwind CSS v3             →  Styling
Lucide React                →  Icons
next/image                  →  Optimized images
next/font                   →  Inter typeface
Vercel                      →  Deployment
```

---

## 🎨 Design System

The whole site runs on a single dark glassmorphism system.

**Background** — fixed deep-purple gradient: `#0f0c29 → #302b63 → #24243e`

**Core utilities:**
```css
.glass        /* frosted card: bg-white/6 + backdrop-blur-xl + subtle border */
.glass-hover  /* lifts card + highlights border on hover                      */
.gradient-text /* white → violet → indigo text gradient                       */
```

**Animations:** `fade-to-black`, `quote-appear`, `float`, `slideUp`, `fadeIn`

---

## 📁 Project Structure

```
myportfolio/
├── app/
│   ├── blog/
│   │   ├── [slug]/page.tsx    ← individual post renderer
│   │   ├── data.ts            ← all post content lives here
│   │   └── page.tsx           ← listing page
│   ├── personal/
│   │   └── page.tsx           ← films, sports, social
│   ├── globals.css            ← design tokens + animations
│   ├── layout.tsx             ← metadata, OG, fonts
│   ├── not-found.tsx          ← custom 404
│   └── page.tsx               ← home (all main sections)
├── components/
│   ├── Navbar.tsx             ← Hannibal transition lives here
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Currently.tsx
│   ├── Contact.tsx
│   └── GithubIcon.tsx         ← custom SVG (lucide deprecated theirs)
└── public/
    ├── avatar.jpg
    ├── hannibal.jpg           ← yes, really
    ├── resume.pdf
    ├── transition.mp3         ← "I do wish we could chat longer..."
    ├── transition-2.mp3       ← "You still wake up sometimes..."
    ├── transition-3.mp3       ← "And you think if you save poor Catherine..."
    └── transition-4.mp3       ← "What became of your lamb, Clarice?"
```

---

## 🚀 Running Locally

```bash
git clone https://github.com/jellyfishing2346/myportfolio.git
cd myportfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and click a nav link with sound on.

```bash
# production build
npm run build && npm start
```

---

## ✍️ Adding a Blog Post

Posts are structured data in `app/blog/data.ts`. Add an entry to the `POSTS` array:

```ts
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  date: 'Jun 2026',
  readTime: '4 min read',
  summary: 'One sentence summary shown on the listing page.',
  tag: 'Quant Finance',
  tagClass: 'bg-violet-500/15 text-violet-300 border-violet-400/25',
  blocks: [
    { type: 'h2',      text: 'Section heading' },
    { type: 'p',       text: 'Paragraph content.' },
    { type: 'callout', text: 'Highlighted pullquote.' },
  ],
}
```

Routing and the listing page pick it up automatically. No CMS needed.

---

## 📦 Deployment

Hosted on Vercel. Push to `main` triggers an automatic redeploy.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## 📜 License

MIT — see [LICENSE](./LICENSE)

<div align="center">

*Built with Next.js, Tailwind, and an unhealthy appreciation for Hannibal Lecter.*

</div>
