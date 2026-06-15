const PROFILE = [
  { label: 'Background', value: 'CS / Software Engineering' },
  { label: 'Building with', value: 'Machine Learning & ML Ops' },
  { label: 'Going toward', value: 'Quantitative Finance' },
  { label: 'Graduating', value: 'May 2026' },
  { label: 'Looking for', value: 'Full-time roles' },
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
              I'm a software engineer who gets pulled toward hard problems, the kind where
              the model, the system, and the data pipeline all have to work together. I
              started in full-stack and drifted toward ML engineering. That means when I'm
              working on a problem, I'm thinking about the pipeline, the API, what happens
              when the model drifts, and how you actually retrain it. Not just getting the
              accuracy number up in a notebook.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              I ended up pointed at quantitative finance because it's one of the few places
              where both sides matter equally. You need to understand the math well enough
              to trust your signals, and you need to engineer well enough that the system
              actually runs in production.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              I'm not trying to do everything. I want to work where the model and the system
              both have to be right, and figure out the hard parts of that in an environment
              where it actually matters.
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
                "Most quant researchers can't ship a production system. Most engineers don't
                really understand what the model is doing. I'm trying to be the person who
                does both, and so far that bet is paying off."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
