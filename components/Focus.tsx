import { SectionHeading } from '@/components/ui'

const FOCUS_AREAS = [
  {
    title: 'Backend systems',
    description: 'APIs, services, and data flows that stay understandable when the happy path ends.',
    tools: ['Node.js', 'Express', 'FastAPI', 'Docker'],
  },
  {
    title: 'Data and ML',
    description: 'Turning messy real-world data into systems people can query, evaluate, and trust.',
    tools: ['Python', 'pandas', 'PyTorch', 'MLflow'],
  },
  {
    title: 'Financial software',
    description: 'Exploring market data and trading ideas with costs, uncertainty, and reproducibility in view.',
    tools: ['PostgreSQL', 'Kafka', 'Redis', 'SQLite'],
  },
]

const TILTS = ['md:-rotate-[1.2deg]', 'md:rotate-[1deg] md:translate-y-6', 'md:-rotate-[0.6deg]']

export default function Focus() {
  return (
    <section id="focus" className="px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="How I work" dark note="I like systems that can explain themselves." />

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {FOCUS_AREAS.map(({ title, description, tools }, i) => (
            <article key={title} className={`slab-wrap slab-hover ${TILTS[i]}`}>
              <div className="sheet cut-b flex h-full flex-col p-7">
                <h3 className="text-2xl font-black uppercase italic leading-none [font-stretch:120%]">{title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-slab/75">{description}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {tools.map((t) => (
                    <li key={t} className="bg-slab px-2 py-1 font-mono text-xs text-paper">{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
