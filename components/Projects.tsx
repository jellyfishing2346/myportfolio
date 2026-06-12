'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, ExternalLink, TrendingUp, Shield, BarChart3 } from 'lucide-react'

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
}

const PROJECTS: Project[] = [
  {
    id: 1,
    badge: 'ML / Risk Analytics',
    badgeClass: 'bg-blue-500/15 text-blue-300 border-blue-400/25',
    Icon: TrendingUp,
    iconClass: 'text-blue-400',
    accentLine: 'linear-gradient(90deg, #3b82f6 0%, transparent 100%)',
    borderHover: 'hover:border-blue-400/40',
    title: 'Credit Risk Scoring Engine',
    objective:
      'End-to-end ML pipeline predicting loan default probability, served via a production REST API — mirroring a real bank underwriting system with SHAP-based adverse-action explanations.',
    metrics: [
      { label: 'ROC-AUC', value: '0.79' },
      { label: 'API Latency', value: '<120ms' },
      { label: 'Records', value: '307K' },
    ],
    stack: ['XGBoost', 'SHAP', 'FastAPI', 'MLflow', 'PostgreSQL', 'Docker', 'AWS Lambda'],
    githubUrl: '#',
  },
  {
    id: 2,
    badge: 'Stream Processing / ML',
    badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/25',
    Icon: Shield,
    iconClass: 'text-emerald-400',
    accentLine: 'linear-gradient(90deg, #10b981 0%, transparent 100%)',
    borderHover: 'hover:border-emerald-400/40',
    title: 'Real-Time Fraud Detection',
    objective:
      'Streaming payment fraud pipeline via Kafka + Redis + ensemble ML, tuned to minimize false positives — because a wrong decline costs as much as a missed fraud case.',
    metrics: [
      { label: 'Precision', value: '94.2%' },
      { label: 'Throughput', value: '10K TPS' },
      { label: 'Score Latency', value: '<50ms' },
    ],
    stack: ['Kafka', 'Redis', 'XGBoost', 'Isolation Forest', 'FastAPI', 'Grafana', 'Docker'],
    githubUrl: '#',
  },
  {
    id: 3,
    badge: 'Quant Finance / Backtesting',
    badgeClass: 'bg-violet-500/15 text-violet-300 border-violet-400/25',
    Icon: BarChart3,
    iconClass: 'text-violet-400',
    accentLine: 'linear-gradient(90deg, #a78bfa 0%, transparent 100%)',
    borderHover: 'hover:border-violet-400/40',
    title: 'Quantitative Trading Framework',
    objective:
      'Multi-signal equity strategy backtested over 15 years of S&P 500 data with walk-forward validation, live market data ingestion, and an interactive Plotly Dash tearsheet.',
    metrics: [
      { label: 'Sharpe Ratio', value: '1.34' },
      { label: 'Backtest Span', value: '15 Years' },
      { label: 'Universe', value: '500+ Tickers' },
    ],
    stack: ['Backtrader', 'QuantStats', 'yfinance', 'Alpha Vantage API', 'SQLite', 'Plotly Dash'],
    githubUrl: '#',
    demoUrl: '#',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { badge, badgeClass, Icon, iconClass, accentLine, borderHover, title, objective, metrics, stack, githubUrl, demoUrl } = project
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
            <Github size={13} /> Code
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
            Three production-minded systems spanning the core verticals of modern financial technology.
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
