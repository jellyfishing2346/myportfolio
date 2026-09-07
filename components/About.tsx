const PROFILE = [
  { label: 'Background', value: 'CS / Software Engineering' },
  { label: 'Building with', value: 'Machine Learning & ML Ops' },
  { label: 'Going toward', value: 'Quantitative Finance' },
  { label: 'Roles', value: 'TA + Research Assistant' },
  { label: 'Looking for', value: 'Software internships' },
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
              I'm a computer science student, teaching assistant, and research assistant
              focused on software engineering, data systems, and financial machine learning.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              I teach cybersecurity, web development, AI foundations, and data science,
              which keeps my technical communication as sharp as my implementation work.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              My projects connect reliable infrastructure with intelligent decisions: real-time
              fraud scoring, explainable credit risk, and validated quantitative research.
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
                "I care about the boundary where data integrity, system performance, and model
                behavior all have to be right at the same time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
