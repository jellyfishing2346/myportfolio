import { Ransom, Wordmark } from '@/components/ui'

const LINKS = [
  { href: 'https://github.com/jellyfishing2346', label: 'GitHub' },
  { href: 'https://linkedin.com/in/faizan-khan234', label: 'LinkedIn' },
  { href: '/Faizan-Khan-Resume.pdf', label: 'Résumé' },
]

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-[100svh] flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-28 text-center sm:px-6">
        <h2 className="-rotate-[3deg] text-[clamp(2rem,1.1rem+4.4vw,4.6rem)]">
          <Ransom text="Let’s build something" />
        </h2>

        <p className="mt-10 max-w-[36rem] text-lg leading-relaxed text-white/90">
          I&rsquo;m looking for an entry-level software engineering role, especially on a team
          working with backend systems, data engineering, ML infrastructure, or fintech. Email is
          the fastest way to reach me.
        </p>

        <a
          href="mailto:faizan.khan.intern02@gmail.com"
          className="mt-10 -rotate-[2deg] bg-paper px-5 py-3 font-display text-[clamp(1rem,0.7rem+1.6vw,1.9rem)] font-extrabold text-slab shadow-[8px_8px_0_var(--slab)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-gold hover:shadow-[12px_12px_0_var(--slab)]"
        >
          faizan.khan.intern02@gmail.com
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-semibold text-white/80">Elsewhere</span>
          {LINKS.map(({ href, label }) => (
            <a key={label} href={href} className="tag tag-slab"><span>{label}</span></a>
          ))}
        </div>

        <span className="diamond mt-14" aria-hidden="true" />
      </div>

      <footer>
        <Wordmark />
        <div className="bg-slab px-6 pb-6 pt-1 text-center font-mono text-xs text-fog">
          &copy; {new Date().getFullYear()} Faizan Khan. Built with Next.js and Tailwind.
        </div>
      </footer>
    </section>
  )
}
