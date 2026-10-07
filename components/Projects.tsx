import Link from 'next/link'
import { PROJECTS } from '@/app/projects/_data'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="section-title">Selected work</h2>
          <p className="text-sm text-muted">Projects, experiments, and honest results</p>
        </div>
        <p className="mb-12 max-w-[36rem] text-muted">
          I build projects to understand a problem, not just to collect technologies. These
          are the ones that best show how I think about data, reliability, and tradeoffs.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {PROJECTS.map(({ id, slug, title, objective, metrics, stack, githubUrl, demoUrl, featured }) => (
            <article key={id} className={`grid gap-6 py-10 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:gap-16 ${featured ? 'md:py-14' : ''}`}>
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  {featured && <span className="text-sm font-medium uppercase tracking-[0.14em] text-accent">Featured project</span>}
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
                  <Link href={`/projects/${slug}`} className="text-ink hover:text-accent transition-colors">
                    {title}
                  </Link>
                </h3>
                <p className="max-w-[36rem] leading-relaxed text-muted">{objective}</p>
                <p className="mt-4 text-sm text-muted"><span className="text-ink">Stack:</span> {stack.join(' · ')}</p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  <Link href={`/projects/${slug}`} className="link">Read the write-up</Link>
                  <a href={githubUrl} className="link">Code</a>
                  {demoUrl && <a href={demoUrl} className="link">Live demo</a>}
                </div>
              </div>

              <dl className="grid grid-cols-3 gap-4 self-start md:grid-cols-1 md:gap-5">
                {metrics.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-sm text-muted">{label}</dt>
                    <dd className="text-2xl font-semibold tabular-nums text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
