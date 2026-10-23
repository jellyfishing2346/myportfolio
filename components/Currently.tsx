// Not on the homepage right now; the About section's status ticker covers it.
// Update this whenever you change the entries below.
import { SectionHeading } from '@/components/ui'

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
    <section id="now" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Right now" note={`Updated ${UPDATED}`} />
        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map(({ label, value }) => (
            <div key={label} className="slab-wrap">
              <div className="slab cut-a h-full p-7">
                <h3 className="tag tag-gold"><span>{label}</span></h3>
                <p className="mt-5 leading-relaxed text-fog">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
