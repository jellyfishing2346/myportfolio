const SKILL_GROUPS = [
  {
    category: 'Machine Learning',
    labelClass: 'text-blue-400',
    borderClass: 'border-blue-400/20 hover:border-blue-400/40',
    dot: '#60a5fa',
    skills: [
      'XGBoost / LightGBM',
      'SHAP Explainability',
      'Scikit-learn',
      'Imbalanced Learning (SMOTE)',
      'MLflow Experiment Tracking',
      'ROC-AUC / KS-Statistic',
      'Feature Engineering',
    ],
  },
  {
    category: 'Data Engineering',
    labelClass: 'text-emerald-400',
    borderClass: 'border-emerald-400/20 hover:border-emerald-400/40',
    dot: '#34d399',
    skills: [
      'Apache Kafka',
      'Redis Feature Store',
      'PostgreSQL / TimescaleDB',
      'ETL Pipelines',
      'REST API Data Scraping',
      'SQLite Time-Series Store',
      'Data Ingestion & Scheduling',
    ],
  },
  {
    category: 'FinTech Domain',
    labelClass: 'text-violet-400',
    borderClass: 'border-violet-400/20 hover:border-violet-400/40',
    dot: '#a78bfa',
    skills: [
      'Credit Risk & Scorecard Design',
      'Fraud Detection Patterns',
      'Strategy Backtesting',
      'Portfolio Optimization',
      'Sharpe / Sortino / Calmar',
      'Basel III Framing',
      'Walk-Forward Validation',
    ],
  },
  {
    category: 'Cloud & DevOps',
    labelClass: 'text-orange-400',
    borderClass: 'border-orange-400/20 hover:border-orange-400/40',
    dot: '#fb923c',
    skills: [
      'AWS (Lambda, ECR, RDS)',
      'Docker / Docker Compose',
      'FastAPI',
      'GitHub Actions CI/CD',
      'Grafana Dashboards',
      'Plotly Dash',
      'Vercel / Render Deployment',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">Capabilities</p>
          <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_GROUPS.map(({ category, labelClass, borderClass, dot, skills }) => (
            <div
              key={category}
              className={`glass rounded-2xl p-6 border ${borderClass} transition-all duration-300 hover:shadow-lg`}
            >
              <h3 className={`text-xs font-semibold uppercase tracking-wider ${labelClass} mb-5`}>
                {category}
              </h3>
              <ul className="space-y-2.5">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: dot }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
