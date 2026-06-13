import { Hammer, BookOpen, Telescope } from 'lucide-react'

const ITEMS = [
  {
    Icon: Hammer,
    label: 'Building',
    color: 'text-violet-400',
    borderColor: 'border-violet-400/20',
    bgColor: 'bg-violet-500/10',
    value: 'Quantitative Trading Framework: backtesting momentum + mean reversion signals across 500+ S&P 500 tickers with walk-forward validation',
  },
  {
    Icon: BookOpen,
    label: 'Reading',
    color: 'text-blue-400',
    borderColor: 'border-blue-400/20',
    bgColor: 'bg-blue-500/10',
    value: '"Advances in Financial Machine Learning" by Marcos López de Prado (specifically the chapter on backtesting pitfalls)',
  },
  {
    Icon: Telescope,
    label: 'Exploring',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    bgColor: 'bg-emerald-500/10',
    value: 'How production ETL patterns from my research work translate to real-time market data pipelines: TimescaleDB vs. kdb+',
  },
]

export default function Currently() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-2xl p-8">
          <p className="text-xs text-violet-400 uppercase tracking-widest font-medium mb-6">
            Right Now
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {ITEMS.map(({ Icon, label, color, borderColor, bgColor, value }) => (
              <div key={label} className={`rounded-xl border ${borderColor} ${bgColor} p-5`}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={14} className={color} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${color}`}>
                    {label}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
