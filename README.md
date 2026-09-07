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
| `/` | Hero, capabilities, projects, experience, education, activities, About, Currently, Contact |
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

The site uses a light editorial engineering style with a warm paper palette, teal accents, a drafting-grid texture, and restrained glass panels for grouped content.

**Background** — warm paper gradient with a subtle technical grid

**Core utilities:**
```css
.glass        /* translucent panel with restrained border and shadow */
.glass-hover  /* lifts panel and highlights the border on hover       */
.gradient-text /* ink → teal → coral text treatment                    */
```

**Animations:** reveal-on-scroll, page transitions, and subtle entrance motion

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
│   ├── Navbar.tsx             ← four-link responsive navigation
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Currently.tsx
│   ├── Contact.tsx
│   └── GithubIcon.tsx         ← GitHub mark
└── public/
    ├── avatar.jpg
    ├── brand-mark.png
    └── hannibal.jpg
```

---

## 🚀 Running Locally

```bash
git clone https://github.com/jellyfishing2346/myportfolio.git
cd myportfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The homepage is organized around capabilities, project evidence, experience, education, activities, and contact.

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

MIT — see [LICENSE](./LICENSE)

<div align="center">

*Built with Next.js, Tailwind, and a focus on making technical work easy to evaluate.*

</div>
