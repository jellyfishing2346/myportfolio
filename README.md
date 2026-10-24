<div align="center">

# 🧠 Faizan Khan — Portfolio

**Software Engineering · FinTech Systems · AI/ML Infrastructure**

*Computer science student, teaching assistant, and research assistant building backend systems, real-time data pipelines, and explainable ML applications.*

[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**[🌐 Live Site](https://myportfolio-xi-liart-28.vercel.app)** &nbsp;·&nbsp; **[💼 LinkedIn](https://linkedin.com/in/faizan-khan234)** &nbsp;·&nbsp; **[🐙 GitHub](https://github.com/jellyfishing2346)**

</div>

---

## ✨ What this portfolio shows

This portfolio presents software engineering work across financial data, machine learning, backend services, and event-driven systems. Projects are described with transparent benchmark framing rather than production guarantees.

Featured work includes real-time fraud scoring, explainable credit-risk prediction, and quantitative trading research with walk-forward validation and transaction-cost modeling.

---

## 🗂️ Pages

| Page | What's on it |
|---|---|
| `/` | Hero, selected work, how I work, experience, About, writing preview, Contact |
| `/projects/[slug]` | Case study write-up for each project |
| `/blog` | Writing on quant finance and ML engineering |
| `/personal` | Horror films with category filters + IMDb links, sports, social |
| `/404` | Custom not-found page |

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

A bold "riot" style: a cobalt field with a darker diagonal shard and halftone dots, black and white panels with jagged edges and hard offset shadows, skewed labels and buttons, and a gold diamond as the one recurring signal. Fonts are Unbounded (display), Archivo (body) and JetBrains Mono (labels), self-hosted through Fontsource.

**Core classes** (in `app/globals.css`):
```css
.slab-wrap   /* unclipped wrapper that paints the hard drop shadow     */
.slab/.sheet /* black / white panel; pick a silhouette with .cut-a…d   */
.tag         /* small skewed label (.tag-gold, .tag-slab, .tag-field)  */
.btn         /* skewed button with a jumping shadow (.btn-slab, -sm)   */
.slash       /* off-axis section heading                               */
```

Each project's card colour is the `accent` field in `app/projects/_data.ts`. The rotating About status lines live in `components/StatusTicker.tsx`.

**Motion:** one load sequence on the hero (label slam, wordmark rise), hover lifts on the wordmark letters, and shadow jumps on cards. All of it is switched off under `prefers-reduced-motion`.

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
│   ├── Navbar.tsx             ← slab nav bar + full-screen mobile menu
│   ├── ui.tsx                 ← Ransom lettering, Wordmark, SectionHeading
│   ├── StatusTicker.tsx       ← rotating status in the About grid
│   ├── Hero.tsx
│   ├── Focus.tsx             ← engineering focus areas
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Currently.tsx
│   ├── Contact.tsx
│   └── GithubIcon.tsx         ← GitHub mark
└── public/
    ├── avatar.jpg
    ├── brand-mark.png
    └── sad-signs.jpg
```

---

## 🚀 Running Locally

```bash
git clone https://github.com/jellyfishing2346/myportfolio.git
cd myportfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The homepage is organized around a recruiter-friendly flow: identity, project evidence, engineering focus, experience, personal context, writing, and contact.

```bash
# production build
npm run build && npm start
```


## 📦 Deployment

Hosted on Vercel. Push to `main` triggers an automatic redeploy.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## 📜 License

Apache License 2.0 — see [LICENSE](./LICENSE)

<div align="center">

*Built with Next.js, Tailwind, and a focus on making technical work easy to evaluate.*

</div>
