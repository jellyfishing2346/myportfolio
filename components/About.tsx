const PROFILE = [
  { label: 'Foundation', value: 'Software Engineering' },
  { label: 'Specialization', value: 'Data Science & ML' },
  { label: 'Target Domain', value: 'FinTech' },
  { label: 'Focus Areas', value: 'Risk · Fraud · Quant' },
  { label: 'Status', value: 'Open to Opportunities' },
]

const TAGS = ['Python', 'ML/AI', 'SQL', 'AWS', 'Docker', 'FastAPI', 'Kafka', 'React']

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">Background</p>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bio */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-5">
              The Transition Story
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              With a foundation in Software Engineering and Data Science, I'm directing my skills
              toward the FinTech domain — where precision, scale, and real-world consequences
              demand the best of both disciplines.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              My portfolio projects mirror production FinTech systems: deployed APIs, backtested
              strategies, and streaming pipelines — not just notebooks. Each project is designed
              to answer the question a hiring manager actually asks:{' '}
              <em className="text-white not-italic font-medium">
                "Can this person solve a real financial problem?"
              </em>
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

          {/* Profile card */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-5">
              Profile
            </h3>
            <div className="space-y-3">
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
          </div>
        </div>
      </div>
    </section>
  )
}
