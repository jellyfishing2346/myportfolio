import { TrendingUp, Shield, BarChart3 } from 'lucide-react'

export interface Metric {
  label: string
  value: string
}

export interface Project {
  id: number
  slug: string
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

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'quantitative-trading-framework',
    badge: 'Quant Finance / Backtesting',
    badgeClass: 'bg-violet-500/15 text-violet-300 border-violet-400/25',
    Icon: BarChart3,
    iconClass: 'text-violet-400',
    accentLine: 'linear-gradient(90deg, #a78bfa 0%, transparent 100%)',
    borderHover: 'hover:border-violet-400/40',
    title: 'Quantitative Trading Framework',
    objective:
      'A research benchmark for momentum and mean-reversion signals, evaluated with transaction costs, out-of-sample periods, and walk-forward validation rather than a single optimized backtest.',
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
    slug: 'credit-risk-scoring-engine',
    badge: 'ML / Risk Analytics',
    badgeClass: 'bg-blue-500/15 text-blue-300 border-blue-400/25',
    Icon: TrendingUp,
    iconClass: 'text-blue-400',
    accentLine: 'linear-gradient(90deg, #3b82f6 0%, transparent 100%)',
    borderHover: 'hover:border-blue-400/40',
    title: 'Credit Risk Scoring Engine',
    objective:
      'An end-to-end project benchmark for loan-default prediction using a 307K-record dataset, an XGBoost model, a deployed REST API, and SHAP explanations for each decision.',
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
    slug: 'real-time-fraud-detection',
    badge: 'Stream Processing / ML',
    badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/25',
    Icon: Shield,
    iconClass: 'text-emerald-400',
    accentLine: 'linear-gradient(90deg, #10b981 0%, transparent 100%)',
    borderHover: 'hover:border-emerald-400/40',
    title: 'Real-Time Fraud Detection',
    objective:
      'An end-to-end streaming benchmark built solo over 8 weeks. Transactions flow through Kafka, recent features are cached in Redis, and XGBoost is evaluated on the trade-off between fraud recall and false positives.',
    metrics: [
      { label: 'ROC-AUC', value: '0.98' },
      { label: 'Benchmark Recall', value: '89%' },
      { label: 'Score Latency', value: '2ms' },
    ],
    stack: ['Kafka', 'Redis', 'XGBoost', 'FastAPI', 'PostgreSQL', 'Docker', 'Python'],
    githubUrl: 'https://github.com/jellyfishing2346/fraud-detection-engine.',
    demoUrl: 'https://sparkling-brioche-94b5f2.netlify.app/dashboard.html',
  },
]
