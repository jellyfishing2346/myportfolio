import Link from 'next/link'
import { PROJECTS } from '@/app/projects/_data'
import { SectionHeading } from '@/components/ui'

const CUTS = ['cut-a', 'cut-b', 'cut-c']

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Selected work"
          note="I build projects to understand a problem, not to collect technologies. These best show how I think about data, reliability, and tradeoffs."
        />

        <div className="space-y-14 md:space-y-20">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className="slab-wrap slab-accent slab-hover"
              style={{ ['--accent' as string]: p.accent }}
            >
              <div className={`slab ${CUTS[i % CUTS.length]} grid gap-10 p-6 sm:p-9 md:grid-cols-12 md:gap-10 md:p-12`}>
                <div className="md:col-span-7">
                  <div className="mb-5 flex flex-wrap items-center gap-2.5">
                    <span className="tag" style={{ background: p.accent }}>
                      <span>No. {String(i + 1).padStart(2, '0')}</span>
                    </span>
                    <span className="tag tag-line"><span>{p.badge}</span></span>
                    {p.featured && <span className="tag tag-gold"><span>Featured</span></span>}
                  </div>

                  <h3 className="text-[clamp(1.9rem,1.2rem+2.6vw,3.2rem)] font-black uppercase italic leading-[0.95] tracking-[-0.01em] [font-stretch:120%]">
                    <Link href={`/projects/${p.slug}`} className="transition-colors hover:text-[color:var(--accent)]">
                      {p.title}
                    </Link>
                  </h3>

                  <p className="mt-5 max-w-[38rem] leading-relaxed text-fog md:text-lg">{p.objective}</p>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with">
                    {p.stack.map((s) => (
                      <li key={s} className="bg-white/[0.08] px-2.5 py-1 font-mono text-xs text-white/85">{s}</li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <Link href={`/projects/${p.slug}`} className="btn btn-sm"><span>Read the write-up</span></Link>
                    <a href={p.githubUrl} className="btn btn-sm btn-slab"><span>Code</span></a>
                    {p.demoUrl && <a href={p.demoUrl} className="btn btn-sm btn-slab"><span>Live demo</span></a>}
                  </div>
                </div>

                <div className="md:col-span-5 md:self-center">
                  <div className="-rotate-[1.5deg] p-5 text-slab sm:p-7" style={{ background: p.accent }}>
                    <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                      {p.metrics.map(({ label, value }) => (
                        <div key={label} className="flex flex-col-reverse">
                          <dt className="mt-2 text-[13px] font-semibold leading-snug">{label}</dt>
                          <dd className="font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] font-black leading-none tabular-nums">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <p className="mt-4 text-right text-xs text-fog">Measured in testing, not live production.</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
