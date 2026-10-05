// Update this whenever you change the entries below. A dated "now" section
// is one of the clearest signs a real person maintains the site.
const UPDATED = 'October 2026'

const ITEMS = [
  {
    label: 'Building',
    value:
      'The walk-forward optimizer in my trading framework works, but out-of-sample Sharpe always comes in lower than in-sample. That is probably correct, not a bug.',
  },
  {
    label: 'Reading',
    value:
      'Advances in Financial Machine Learning by Lopez de Prado. I’m in the combinatorial purged cross-validation chapter. Dense. I’ve read it twice and I think I understand it.',
  },
  {
    label: 'Deciding',
    value:
      'Whether TimescaleDB is good enough for tick data, or if kdb+ is worth the learning curve. It’s everywhere in HFT, but the syntax is its own thing and the license isn’t cheap.',
  },
]

export default function Currently() {
  return (
    <section id="now" className="px-6 py-20 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="section-title">What I&rsquo;m working on now</h2>
          <p className="text-sm text-muted">Updated {UPDATED}</p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {ITEMS.map(({ label, value }) => (
            <div key={label}>
              <h3 className="mb-2 font-semibold text-accent">{label}</h3>
              <p className="leading-relaxed text-muted">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
