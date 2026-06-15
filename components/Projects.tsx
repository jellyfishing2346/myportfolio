'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, TrendingUp, Shield, BarChart3 } from 'lucide-react'
import GithubIcon from '@/components/GithubIcon'

interface Metric {
  label: string
  value: string
}

interface Project {
  id: number
  badge: string
  badgeClass: string
  Icon: React.ElementType
  iconClass: string
  accentLine: string
  borderHover: string
  title: string
  objective: string
  metrics: Metric[]
  stack: string[]
  githubUrl: string
  demoUrl?: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    id: 1,
    badge: 'Quant Finance / Backtesting',
    badgeClass: 'bg-violet-500/15 text-violet-300 border-violet-400/25',
    Icon: BarChart3,
    iconClass: 'text-violet-400',
    accentLine: 'linear-gradient(90deg, #a78bfa 0%, transparent 100%)',
    borderHover: 'hover:border-violet-400/40',
    title: 'Quantitative Trading Framework',
    objective:
      'I wanted to know if momentum and mean-reversion signals actually work when you test them honestly: real transaction costs, out-of-sample periods, no cherry-picking. This is that experiment.',
    metrics: [
      { label: 'Sharpe Ratio', value: '0.74' },
      { label: 'Backtest Span', value: '4 Years' },
      { label: 'Universe', value: 'Any Ticker' },
    ],
    stack: ['Backtrader', 'QuantStats', 'yfinance', 'Alpha Vantage API', 'SQLite', 'Plotly Dash'],
    githubUrl: 'https://github.com/jellyfishing2346/quantitative-finance',
    demoUrl: 'https://quantitative-finance.onrender.com/',
    featured: true,
  },
  {
    id: 2,
    badge: 'ML / Risk Analytics',
    badgeClass: 'bg-blue-500/15 text-blue-300 border-blue-400/25',
    Icon: TrendingUp,
    iconClass: 'text-blue-400',
    accentLine: 'linear-gradient(90deg, #3b82f6 0%, transparent 100%)',
    borderHover: 'hover:border-blue-400/40',
    title: 'Credit Risk Scoring Engine',
    objective:
      'I built this to understand how banks actually score loan applications. Raw loan data, XGBoost model, a deployed REST API, and SHAP explanations for why each decision was made. The whole stack, not just the model.',
    metrics: [
      { label: 'ROC-AUC', value: '0.78' },      // got 0.7795, not 0.79
      { label: 'API Latency', value: '<35ms' },   // measured 26-32ms warm
      { label: 'Records', value: '307K' },
    ],
    stack: ['XGBoost', 'SHAP', 'FastAPI', 'MLflow', 'Docker', 'Google Cloud Run', 'Streamlit'],
    // removed PostgreSQL (schema built but not used at inference)
    // replaced AWS Lambda with Google Cloud Run (what's actually running)
    // added Streamlit (the dashboard)
    githubUrl: 'https://github.com/jellyfishing2346/credit-risk',
    demoUrl: 'https://credit-risk-x3nbufkicqmtnxymgpneeq.streamlit.app/',
  },
  {
    id: 3,
    badge: 'Stream Processing / ML',
    badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/25',
    Icon: Shield,
    iconClass: 'text-emerald-400',
    accentLine: 'linear-gradient(90deg, #10b981 0%, transparent 100%)',
    borderHover: 'hover:border-emerald-400/40',
    title: 'Real-Time Fraud Detection',
    objective:
      'Built solo over 8 weeks. Transactions stream through Kafka, features are cached in Redis for 2ms scoring, and XGBoost catches 89% of real fraud while flagging only 0.08% of legitimate transactions. That tradeoff was the whole design challenge.',
    metrics: [
      { label: 'ROC-AUC', value: '0.98' },
      { label: 'Score Latency', value: '2ms' },
      { label: 'Fraud Recall', value: '89%' },
    ],
    stack: ['Kafka', 'Redis', 'XGBoost', 'FastAPI', 'PostgreSQL', 'Docker', 'Python'],
    githubUrl: 'https://github.com/jellyfishing2346/fraud-detection-engine.',
    demoUrl: 'https://sparkling-brioche-94b5f2.netlify.app/dashboard.html',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { badge, badgeClass, Icon, iconClass, accentLine, borderHover, title, objective, metrics, stack, githubUrl, demoUrl, featured } = project
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl overflow-hidden border border-white/10 ${borderHover} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {/* Accent line */}
      <div className="h-0.5 w-full flex-shrink-0" style={{ background: accentLine }} />

      <div className="p-7 flex flex-col flex-1">
        {/* Header row */}
        {featured && (
          <div className="mb-3 inline-flex items-center gap-1.5 text-xs text-violet-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Primary Focus
          </div>
        )}
        <div className="flex items-start justify-between mb-4">
          <span className={`text-xs px-3 py-1 rounded-full border font-medium ${badgeClass}`}>
            {badge}
          </span>
          <Icon size={18} className={iconClass} />
        </div>

        <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{objective}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {metrics.map(({ label, value }) => (
            <div key={label} className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <div className="text-base font-bold text-white">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded text-xs bg-white/[0.05] text-slate-400 border border-white/[0.06]">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <a
            href={githubUrl}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs text-slate-300 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200"
          >
            <GithubIcon size={13} /> Code
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs text-violet-300 border border-violet-400/30 hover:bg-violet-400/10 transition-all duration-200"
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">Portfolio</p>
          <h2 className="text-4xl font-bold text-white mb-3">FinTech Projects</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Three projects where I tried to build the real thing, not just the notebook version.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
