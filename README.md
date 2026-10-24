<div align="center">

<!-- Ransom-note title, same idea as the "Let's build something" heading on the site -->
![F](https://img.shields.io/badge/-F-0D0E13?style=for-the-badge)
![A](https://img.shields.io/badge/-A-FFFFFF?style=for-the-badge)
![I](https://img.shields.io/badge/-I-F7C31B?style=for-the-badge)
![Z](https://img.shields.io/badge/-Z-1F4BD8?style=for-the-badge)
![A](https://img.shields.io/badge/-A-0D0E13?style=for-the-badge)
![N](https://img.shields.io/badge/-N-FFFFFF?style=for-the-badge)
&nbsp;&nbsp;
![K](https://img.shields.io/badge/-K-1F4BD8?style=for-the-badge)
![H](https://img.shields.io/badge/-H-0D0E13?style=for-the-badge)
![A](https://img.shields.io/badge/-A-F7C31B?style=for-the-badge)
![N](https://img.shields.io/badge/-N-FFFFFF?style=for-the-badge)

### ◆ Software Engineer · Backend · Data · ML ◆

*CS student at Brooklyn College building backend services, data pipelines, and ML applications,<br>and caring about the part after the demo.*

[![Live site](https://img.shields.io/badge/%E2%96%B6_PRESS_START-Live_site-1F4BD8?style=for-the-badge)](https://myportfolio-xi-liart-28.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0D0E13?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/faizan-khan234)
[![GitHub](https://img.shields.io/badge/GitHub-0D0E13?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jellyfishing2346)
[![Résumé](https://img.shields.io/badge/R%C3%A9sum%C3%A9-F7C31B?style=for-the-badge)](https://myportfolio-xi-liart-28.vercel.app/Faizan-Khan-Resume.pdf)

</div>

---

## ◆ What is this?

My portfolio, dressed like a game menu. A cobalt field, black slabs with jagged edges, hard shadows that jump when you hover, skewed labels, and one gold diamond that keeps showing up. Underneath the noise, it's built for one job: letting a recruiter or engineer see what I've built, how I think, and how to reach me, in under a minute.

> No glassmorphism, no gradients, no rounded corners. Everything is flat, sharp and slightly off-axis on purpose.

---

## ◆ Select a stage

| Stage | Route | What's there |
|---|---|---|
| 🏠 **Title screen** | `/` | Hero, selected work, how I work, experience, about, writing, contact |
| 🗂️ **Case files** | `/projects/[slug]` | Full write-up for each project: the problem, the decisions, the tradeoffs |
| ✍️ **Field notes** | `/blog` | Short posts on quant finance and ML engineering, mostly about what I got wrong |
| 🎬 **Side quest** | `/personal` | Horror films (with filters), sports, and life outside code |
| 💀 **Game over** | `/404` | A custom not-found page for anyone who wanders off the map |

---

## ◆ Featured runs

| | Project | One-liner | Code |
|---|---|---|---|
| 📈 | **Quantitative Trading Framework** | Backtesting with walk-forward validation, transaction costs, and an interactive dashboard | [repo](https://github.com/jellyfishing2346/quantitative-finance) |
| 🏦 | **Credit Risk Scoring Engine** | XGBoost on 307K loan records, served by FastAPI with per-decision SHAP explanations | [repo](https://github.com/jellyfishing2346/credit-risk) |
| 🚨 | **Real-Time Fraud Detection** | Kafka → Redis → XGBoost → FastAPI, with a dashboard for human reviewers | [repo](https://github.com/jellyfishing2346/fraud-detection-engine.) |

Metrics, demos and the full story for each live on the [site](https://myportfolio-xi-liart-28.vercel.app/#projects).

---

## ◆ The design system

**Palette**

| | Token | Hex | Used for |
|---|---|---|---|
| ![#1F4BD8](https://placehold.co/28x28/1F4BD8/1F4BD8/png) | `--field` | `#1F4BD8` | The cobalt background everything sits on |
| ![#1535A3](https://placehold.co/28x28/1535A3/1535A3/png) | `--field-deep` | `#1535A3` | The diagonal shard with the halftone dots |
| ![#0D0E13](https://placehold.co/28x28/0D0E13/0D0E13/png) | `--slab` | `#0D0E13` | Black panels, ink, hard shadows |
| ![#FFFFFF](https://placehold.co/28x28/FFFFFF/FFFFFF/png) | `--paper` | `#FFFFFF` | White panels, labels, text on the field |
| ![#F7C31B](https://placehold.co/28x28/F7C31B/F7C31B/png) | `--gold` | `#F7C31B` | The diamond, focus rings, one signal colour |

Each project card gets its own accent too: violet for trading, amber for credit risk, red for fraud.

**Type**

| Role | Font |
|---|---|
| Display: headings, the giant wordmark | **Unbounded** |
| Body: everything you actually read | **Archivo** (variable width, cranked wide and italic for project titles) |
| Labels: tags, dates, little metadata | **JetBrains Mono** |

All three are self-hosted through Fontsource, so builds never depend on a font CDN.

**The building blocks** (all in `app/globals.css`)

```css
.slab-wrap    /* unclipped wrapper that paints the hard shadow; a clip-path would eat it */
.slab .sheet  /* black / white panel; add .cut-a, -b, -c or -d for a jagged silhouette */
.tag          /* small skewed label: .tag-gold, .tag-slab, .tag-field, .tag-line */
.btn          /* skewed button whose shadow jumps on hover: .btn-slab, .btn-gold, .btn-sm */
.slash        /* the off-axis section heading */
.ransom       /* cut-out letters, via <Ransom text="..." /> in components/ui.tsx */
```

**Motion.** One choreographed moment when the page loads: the hero label slams in, the wordmark band wipes across, and the letters of my name rise one by one. After that, motion only happens when you ask for it, like hovering a card or a letter of the wordmark. Everything is switched off for anyone with `prefers-reduced-motion` set.

---

## ◆ Cheat codes

Want to change something? Here's where it lives.

| To change... | Edit |
|---|---|
| Projects, metrics, links, case-study text, card colours | `app/projects/_data.ts` |
| Blog posts | `app/blog/data.ts` |
| The rotating "Status" lines in About | `components/StatusTicker.tsx` |
| Experience entries | `components/Experience.tsx` |
| Tools list and bio | `components/About.tsx` |
| Hero label and intro | `components/Hero.tsx` |
| Colours, slabs, buttons, animations | `app/globals.css` |
| Résumé PDF | replace `public/Faizan-Khan-Resume.pdf` |

---

## ◆ Map

```
myportfolio/
├── app/
│   ├── page.tsx                ← the title screen: stacks every home section
│   ├── layout.tsx              ← fonts, metadata, the fixed cobalt field
│   ├── globals.css             ← design tokens, slabs, tags, buttons, motion
│   ├── template.tsx            ← page fade between routes
│   ├── not-found.tsx           ← custom 404
│   ├── projects/
│   │   ├── _data.ts            ← all project data lives here
│   │   └── [slug]/page.tsx     ← case study pages
│   ├── blog/
│   │   ├── data.ts             ← all post content lives here
│   │   ├── page.tsx            ← post list
│   │   └── [slug]/page.tsx     ← single post
│   └── personal/page.tsx       ← films, sports, people
├── components/
│   ├── ui.tsx                  ← <Ransom>, <Wordmark>, <SectionHeading>
│   ├── Navbar.tsx              ← white slab nav + full-screen mobile menu
│   ├── Hero.tsx  Projects.tsx  Focus.tsx  Experience.tsx
│   ├── About.tsx  StatusTicker.tsx  Writing.tsx  Contact.tsx
│   ├── CaseStudy.tsx           ← layout for /projects/[slug]
│   ├── Currently.tsx           ← "right now" section (not on the home page yet)
│   └── GithubIcon.tsx
├── lib/projects.ts
└── public/                     ← résumé, avatar, project images
```

---

## ◆ Run it locally

```bash
git clone https://github.com/jellyfishing2346/myportfolio.git
cd myportfolio
npm install
npm run dev        # → http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

---

## ◆ Ship it

Hosted on **Vercel**. Every push to `main` redeploys automatically.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## ◆ Built with

[![Next.js](https://img.shields.io/badge/Next.js_14-0D0E13?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-1F4BD8?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0D0E13?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Lucide](https://img.shields.io/badge/Lucide_icons-1F4BD8?style=for-the-badge)](https://lucide.dev/)
[![Fontsource](https://img.shields.io/badge/Fontsource-0D0E13?style=for-the-badge)](https://fontsource.org/)
[![Vercel](https://img.shields.io/badge/Vercel-F7C31B?style=for-the-badge&logo=vercel&logoColor=black)](https://vercel.com/)

---

## ◆ License

Apache License 2.0. See [LICENSE](./LICENSE).

<div align="center">

<br>

**◆ Let's build something. ◆**

[faizan.khan.intern02@gmail.com](mailto:faizan.khan.intern02@gmail.com)

</div>
