import { TrendingUp, Shield, BarChart3 } from 'lucide-react'

export interface Metric {
  label: string
  value: string
}

export interface StoryImage {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export interface StoryCode {
  caption: string
  text: string
}

export interface StorySection {
  heading: string
  paragraphs: string[]
  image?: StoryImage
  code?: StoryCode
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
  // The long-form write-up. Projects without one show a short placeholder.
  story?: StorySection[]
  relatedPost?: { slug: string; title: string }
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
      'A backtesting framework for momentum and mean-reversion strategies. I test every strategy against transaction costs, out-of-sample periods, and walk-forward validation instead of trusting one optimized backtest.',
    metrics: [
      { label: 'Out-of-sample Sharpe', value: '0.74' },
      { label: 'Backtest Span', value: '4 Years' },
      { label: 'Tickers', value: 'Any' },
    ],
    stack: ['Backtrader', 'QuantStats', 'yfinance', 'Alpha Vantage API', 'SQLite', 'Plotly Dash'],
    githubUrl: 'https://github.com/jellyfishing2346/quantitative-finance',
    demoUrl: 'https://quantitative-finance.onrender.com/',
    featured: true,
    relatedPost: { slug: 'why-backtesting-lies', title: 'Why Your Backtest Is Lying to You' },
    story: [
      {
        heading: 'The backtest that fooled me',
        paragraphs: [
          'The first time I ran a serious backtest, the numbers looked great. A dual moving average crossover on AAPL from 2020 to 2023, fast period 20, slow period 60. Ten trades, +67% return. I thought I had found something.',
          'I had not. I had found a pattern that fit one ticker over one window, and it told me almost nothing about what would happen next.',
        ],
        image: {
          src: '/projects/trading-first-backtest.jpg',
          alt: 'Dashboard showing an AAPL backtest from 2020 to 2023 with 10 trades and a 67.32% return',
          caption: 'The original run. It looks great, and it is the reason I rebuilt the framework.',
          width: 1600,
          height: 1040,
        },
      },
      {
        heading: 'Three things that made it fake',
        paragraphs: [
          'First, I had grid-searched every combination of fast and slow periods and picked the best one using the full history. I was asking which parameters would have been best in hindsight, then using that answer to judge the strategy.',
          'Second, there were no transaction costs. Real trades pay commission and slippage, and small costs compound across a few years.',
          'Third, I measured performance on the same data I had optimized on. That is not validation. That is memorization.',
        ],
      },
      {
        heading: 'What I built instead',
        paragraphs: [
          'The framework now has a walk-forward splitter. It takes a training window and a test window, grid-searches parameters on the training window only, then runs those exact parameters on the test window it has never seen. Then it slides forward by one test window and repeats.',
          'Every trade pays 0.1% commission and 0.05% slippage by default. Price data comes from Yahoo Finance with Alpha Vantage as a fallback, gets cached in SQLite so I am not hitting the API on every run, and is validated with Pydantic before a strategy ever sees it. Strategies run on Backtrader: a moving average crossover for momentum and a Bollinger Band strategy for mean reversion.',
          'There is a Plotly Dash dashboard where you can change the ticker, dates, strategy, and parameters and watch the equity curve update. And there are 53 tests, because I wanted to be able to trust the numbers.',
        ],
      },
      {
        heading: 'What the numbers look like now',
        paragraphs: [
          // TODO: add the exact setup behind this number (tickers, date range, train and
          // test window sizes) so anyone can reproduce it. Reviewers will ask.
          'The Sharpe ratio is 0.74. That is computed only from the out-of-sample test windows, with full trading costs applied. It is lower than the in-sample number, and it always is.',
          'That gap is not a bug. If out-of-sample results ever matched in-sample ones, that would be the thing to worry about.',
        ],
      },
      {
        heading: 'Where I would take it next',
        paragraphs: [
          'I am reading Advances in Financial Machine Learning by Lopez de Prado, specifically the chapter on combinatorial purged cross-validation. A single walk-forward path only tests one sequence of periods, and that method tests many, which would give a better sense of how much of the 0.74 is luck.',
          'I am also deciding how to store tick data if I go below daily bars. TimescaleDB is familiar, kdb+ is what a lot of trading firms use, and I have not picked yet.',
        ],
      },
    ],
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
      'Predicts loan default on a 307K-record dataset with XGBoost, serves predictions through a deployed REST API, and uses SHAP to explain each individual decision.',
    metrics: [
      { label: 'Test ROC-AUC', value: '0.78' },      // got 0.7795, not 0.79
      { label: 'API Latency', value: '<35ms' },   // measured 26-32ms warm
      { label: 'Records', value: '307K' },
    ],
    stack: ['XGBoost', 'SHAP', 'FastAPI', 'MLflow', 'Docker', 'Google Cloud Run', 'Streamlit'],
    // removed PostgreSQL (schema built but not used at inference)
    // replaced AWS Lambda with Google Cloud Run (what's actually running)
    // added Streamlit (the dashboard)
    githubUrl: 'https://github.com/jellyfishing2346/credit-risk',
    demoUrl: 'https://credit-risk-x3nbufkicqmtnxymgpneeq.streamlit.app/',
    relatedPost: { slug: 'credit-risk-from-scratch', title: 'Building a Credit Scoring Model From Scratch' },
    story: [
      {
        heading: 'The real problem was in the other tables',
        paragraphs: [
          'The Home Credit Default Risk dataset is 307,511 loan applications spread across 8 CSV files. There is one main applications table, plus tables for credit bureau history, previous applications, installment payments, point-of-sale cash loans, and credit card balances. Some of those have more than 10 million rows.',
          'The modeling problem is not really in the main table. It is in deciding how to squeeze each of the other tables down to a handful of numbers per applicant: active credit ratio and max overdue days from the bureau data, approval rate from previous applications, payment ratio and days late from installments. After joining everything and adding a few domain ratios, the feature matrix was 176 columns.',
          'The single most important feature turned out to be one I built: the product of two external credit scores. Someone who scores poorly on both is much riskier than someone who scores poorly on just one, and multiplying them captures that.',
        ],
      },
      {
        heading: 'Accuracy would have lied',
        paragraphs: [
          'Only 8.1% of the applications are defaults. A model that predicts "no default" for everyone gets about 92% accuracy and is completely useless. So I measured ROC-AUC instead, which does not reward ignoring the minority class.',
          'I weighted the default class about 11 times more heavily to match the imbalance, split the data 60/20/20 with the default rate preserved in every split, and ran 30 rounds of hyperparameter search with Optuna, logging each run in MLflow.',
          'The final model scored 0.7743 on validation and 0.7795 on the held-out test set. The fact that those two numbers are close mattered more to me than either number on its own.',
        ],
      },
      {
        heading: 'The small things that would have broken it',
        paragraphs: [
          'The employment column uses 365243 days, about 1,000 years, to mean "never employed." Left alone, it looks like the most experienced workers in history. I replaced it with a missing value and added a separate flag so the model still knows it happened.',
          'The harder problem was keeping preprocessing identical between training and the live API. The API accepts whatever fields a caller has, so a request might be missing most of the 176 columns. The pipeline remembers the exact column order it was trained on and realigns every request to it, filling gaps the same way it did during training.',
        ],
      },
      {
        heading: 'Every decision comes with a reason',
        paragraphs: [
          'In real lending you cannot just say "denied." Regulators require a reason. So every prediction comes back with the features that pushed the risk up or down, computed in the same request.',
          'I used XGBoost\'s built-in SHAP calculation instead of the separate shap library. It runs the same algorithm without the extra dependencies, so explanations add almost nothing to response time. A warm request takes under 35ms. The API runs in Docker on Google Cloud Run, a Streamlit dashboard calls it live, and 41 tests cover the pipeline, training, explanations, and API.',
        ],
        code: {
          caption: 'An example response from the API, trimmed to the first explanation.',
          text: `POST /score

{
  "application_id": "APP-001",
  "default_probability": 0.401652,
  "risk_band": "HIGH",
  "latency_ms": 30.98,
  "shap_explanation": {
    "top_drivers": [
      {
        "feature": "num__ext_source_2",
        "shap_value": -0.167671,
        "direction": "DECREASES_RISK"
      }
    ]
  }
}`,
        },
      },
      {
        heading: 'Where it falls short',
        paragraphs: [
          'The test score of 0.7795 is a little below the roughly 0.79 that strong public Kaggle entries reach. The likely gap is the monthly bureau balance table, which I did not aggregate, plus the hand-crafted interaction features top entries use.',
          'Gender shows up among the model\'s top 8 features. In many places, including the US, using gender in lending decisions is restricted or illegal. This model is a portfolio project and should never make real credit decisions, but if it were going anywhere near production it would need a proper fairness audit first.',
          'It also leans hard on the external credit scores, which new applicants often do not have, and it was trained on one Central and Eastern European lender\'s data. It would not transfer cleanly to other markets, and it would drift as borrower behavior changes.',
        ],
      },
      {
        heading: 'Where I would take it next',
        paragraphs: [
          'Aggregating the monthly bureau balance data is the most direct way to close the gap with the public benchmark. After that, a fairness audit across gender and age, comparing approval rates and error rates between groups, to see how much the model is relying on characteristics it should not.',
        ],
      },
    ],
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
      'Built solo over 8 weeks. Transactions stream through Kafka, recent history is cached in Redis, and an XGBoost model flags suspicious ones for human review. It also taught me about training-serving skew the hard way.',
    metrics: [
      { label: 'Offline ROC-AUC', value: '0.98' },
      { label: 'Offline recall', value: '89%' },
      { label: 'Warm latency', value: '2ms' },
    ],
    stack: ['Kafka', 'Redis', 'XGBoost', 'FastAPI', 'PostgreSQL', 'Docker', 'Python'],
    githubUrl: 'https://github.com/jellyfishing2346/fraud-detection-engine.',
    demoUrl: 'https://sparkling-brioche-94b5f2.netlify.app/dashboard.html',
    relatedPost: { slug: 'false-positives-in-fraud', title: 'The False Positive Problem in Fraud Detection' },
    story: [
      {
        heading: 'What I set out to build',
        paragraphs: [
          'I wanted to build the kind of system that sits inside a payments company. Transactions arrive through Kafka, partitioned by user so all of one person\'s events land on the same consumer. A FastAPI scoring service looks up that user\'s recent history in Redis: how many transactions in the last hour and last day, and how far this one is from their last known location.',
          'Anything scoring below 0.4 is approved and written to the ledger. Anything at or above 0.4 goes to a fraud alerts table and shows up in a reviewer dashboard, where a person makes the call. A warm request takes 2 to 3ms because Redis keeps the history in memory. I built it solo over 8 weeks.',
        ],
      },
      {
        heading: 'Picking the threshold',
        paragraphs: [
          'The training data is the Kaggle credit card fraud dataset: 284,807 transactions, only 492 of them fraud. That is 0.17%, so a model that approves everything is 99.83% accurate and catches nothing. I balanced the training set with SMOTE, which generates synthetic fraud examples, and left the test set at its natural fraud rate so the evaluation would stay honest.',
          'I set the threshold at 0.4 instead of the default 0.5. On the test set that caught 87 of 98 frauds and wrongly flagged 43 of 56,864 legitimate transactions. Those 43 are a tiny rate, but they also mean roughly one in three flags is a real customer. That is why the reviewer dashboard exists: the model narrows things down, and a person decides.',
        ],
        code: {
          caption: 'Offline results at a 0.4 threshold, from the project\'s model documentation.',
          text: `                 Pred Legit   Pred Fraud
  Actual Legit     56,821          43
  Actual Fraud         11          87

  Recall 0.89   Precision 0.67   ROC-AUC 0.9827`,
        },
      },
      {
        heading: 'The gap between training and serving',
        paragraphs: [
          'Going back through the code, I found a problem I had missed the whole time I was building it. The model was trained on the Kaggle dataset\'s 28 anonymized features, V1 through V28, plus amount and time of day. The live API builds a different set: amount and time of day, plus the velocity and location features from Redis. Any column the model expects but the API did not build gets filled with zero.',
          'So in the deployed system, the 28 features that carry nearly all of the model\'s signal are always zero, and the velocity and location features I built Redis around are never seen by the model at all. Live scores really only depend on amount and time of day. Even time of day does not line up: in the dataset it counts seconds from the first transaction in the file, not the hour on a clock.',
          'This is called training-serving skew. It is easy to miss because nothing breaks. The pipeline runs, the API returns scores, and the dashboard fills up with alerts. The only sign is that the scores do not mean what you think they mean.',
        ],
        code: {
          caption: 'The three places the mismatch shows up in the repo.',
          text: `# What the model was trained on (models/feature_columns.txt)
V1 ... V28, amount_log, hour_of_day, is_night

# What the live API builds (ml/features.py)
amount_log, hour_of_day, is_night,
velocity_1h, velocity_24h, geo_distance_km, is_new_location

# How the gap gets filled (ml/predict.py)
[features.get(col, 0.0) for col in _feature_cols]`,
        },
      },
      {
        heading: 'What the numbers actually mean',
        paragraphs: [
          'The 0.98 ROC-AUC and 89% recall are real results on held-out Kaggle data. They show the model can separate fraud when it has those 28 features. They do not describe the deployed system, which is why this page labels them as offline results.',
          'They also say less than they seem to. The dataset covers two days of European cardholder transactions, and strong models on it commonly land around 0.98. The parts of this project I am most confident in are the engineering ones: the streaming pipeline, the Redis lookups, the threshold reasoning, and the review workflow.',
        ],
      },
      {
        heading: 'How I would fix it',
        paragraphs: [
          'The model needs to train on data that looks like what the live system sees: real user IDs, real timestamps, and locations, so velocity and distance can actually be learned. That means either a dataset like IEEE-CIS fraud detection or a synthetic transaction generator.',
          'I would also add a check at startup that compares the model\'s expected features to what the API builds, and refuses to run if they differ, instead of quietly filling in zeros. Then I would measure the whole system end to end by replaying held-out transactions through Kafka, rather than only scoring a test set offline.',
          'The database already stores every reviewer verdict, with a flag for whether it has been used in training. Feeding those decisions back into retraining is the step after that.',
        ],
      },
    ],
  },
]
