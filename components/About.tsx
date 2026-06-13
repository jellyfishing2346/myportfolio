const PROFILE = [
  { label: 'Foundation', value: 'CS / Software Engineering' },
  { label: 'Applied Skill', value: 'Machine Learning & ML Ops' },
  { label: 'Target Domain', value: 'Quantitative Finance' },
  { label: 'Edge', value: 'I build things that actually run' },
  { label: 'Status', value: 'Open to Opportunities' },
]

const TAGS = ['Python', 'ML/AI', 'SQL', 'AWS', 'Docker', 'FastAPI', 'Kafka', 'Backtrader']

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">Background</p>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Narrative */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-5">
              The Honest Version
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              My background is software engineering — which means when I work on an ML problem,
              I'm thinking about the API layer, the data pipeline, the monitoring strategy,
              and the retraining loop. Not just the model accuracy in a notebook.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              I'm moving toward quantitative finance because it's the domain that demands both:
              you need to understand the math well enough to trust your signals, and you need
              to engineer well enough that the system actually runs. Most people coming from
              pure quant backgrounds can't do the second part.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              I'm not trying to be a generalist. I'm building toward one specific thing —
              ML engineering in systematic trading or quant research infrastructure —
              where model quality and system quality both matter equally.
            </p>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-violet-500/15 text-violet-300 border border-violet-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Profile */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-5">
              Profile
            </h3>
            <div className="space-y-3 mb-8">
              {PROFILE.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0"
                >
                  <span className="text-slate-500 text-sm">{label}</span>
                  <span className="text-white text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Point of view callout */}
            <div className="rounded-xl bg-violet-500/10 border border-violet-400/20 p-4">
              <p className="text-xs text-violet-400 uppercase tracking-wider mb-2 font-medium">Point of View</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Most quant researchers can't productionize their models. Most engineers
                don't understand what the model is actually doing. I do both — and that's
                the gap I'm here to fill."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
