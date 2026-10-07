const FOCUS_AREAS = [
  {
    number: '01',
    title: 'Backend systems',
    description: 'APIs, services, and data flows that stay understandable when the happy path ends.',
    tools: 'Node.js · Express · Docker',
  },
  {
    number: '02',
    title: 'Data and ML',
    description: 'Turning messy real-world data into systems people can query, evaluate, and trust.',
    tools: 'Python · ETL · NLP · validation',
  },
  {
    number: '03',
    title: 'Financial software',
    description: 'Exploring market data and trading ideas with costs, uncertainty, and reproducibility in view.',
    tools: 'Backtrader · SQLite · Plotly',
  },
]

export default function Focus() {
  return (
    <section id="focus" className="border-t border-line px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent">How I work</p>
            <h2 className="section-title">I like systems that can explain themselves.</h2>
          </div>
          <div className="grid gap-0 border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
            {FOCUS_AREAS.map(({ number, title, description, tools }) => (
              <article key={number} className="border-b border-line py-7 last:border-0 md:border-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <p className="mb-8 text-sm tabular-nums text-muted">{number}</p>
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{description}</p>
                <p className="mt-5 text-sm text-accent">{tools}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
