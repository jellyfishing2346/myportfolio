export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'callout'; text: string }

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  tag: string
  tagClass: string
  readTime: string
  blocks: Block[]
}

export const POSTS: Post[] = [
  {
    slug: 'why-backtesting-lies',
    title: 'Why Your Backtest Is Lying to You',
    date: 'Jun 2026',
    readTime: '5 min read',
    summary: 'Walk-forward validation, lookahead bias, and why a Sharpe ratio in a notebook means almost nothing without out-of-sample testing.',
    tag: 'Quant Finance',
    tagClass: 'bg-violet-500/15 text-violet-300 border-violet-400/25',
    blocks: [
      { type: 'p', text: 'Everyone building a trading strategy for the first time makes the same mistake. They run a backtest, see a great Sharpe ratio, and think they have found something real. They have not. They have found a curve-fitted pattern that existed in their training data and probably nowhere else.' },
      { type: 'h2', text: 'The three ways a backtest lies' },
      { type: 'p', text: 'Lookahead bias is the most common. It happens when your model accidentally uses information that would not have been available at the time of the trade. A moving average calculated on closing prices, used to generate a signal on that same day\'s close, is a simple example. You would never have known the close before it happened.' },
      { type: 'p', text: 'Survivorship bias is sneakier. If you backtest on the current S&P 500 constituents, you are testing on a list of companies that survived. The ones that went bankrupt or got delisted are gone from your dataset. Your strategy looks better than it would have in real life because the worst outcomes have been quietly removed.' },
      { type: 'p', text: 'Overfitting is the third. The more parameters you tune, the more your model learns the noise in your training data rather than a real signal. A strategy with 12 tuned parameters and a 15-year backtest has probably just memorized history.' },
      { type: 'h2', text: 'What actually helps: walk-forward validation' },
      { type: 'p', text: 'Walk-forward validation splits your data into sequential windows. You train on the first window, test on the next, then slide forward and repeat. At the end you have out-of-sample performance across many periods, not one big in-sample number.' },
      { type: 'callout', text: 'A strategy with a Sharpe of 1.2 in-sample and 0.3 out-of-sample is not a 0.3 Sharpe strategy. It is a strategy with no edge.' },
      { type: 'p', text: 'When I built my quantitative trading framework, walk-forward validation was non-negotiable. The in-sample Sharpe looked great. The out-of-sample number was lower (as it always is), but it was stable across windows. That stability is the actual signal.' },
      { type: 'h2', text: 'The honest version' },
      { type: 'p', text: 'Most retail backtests are optimism dressed up as math. If you cannot show walk-forward results, transaction costs, slippage, and an honest account of what data you used and when, your backtest is not evidence of anything.' },
    ],
  },
  {
    slug: 'credit-risk-from-scratch',
    title: 'Building a Credit Scoring Model From Scratch',
    date: 'May 2026',
    readTime: '6 min read',
    summary: 'From raw loan data to a deployed REST API: the decisions that actually matter when you are building something a bank would recognize.',
    tag: 'ML Engineering',
    tagClass: 'bg-blue-500/15 text-blue-300 border-blue-400/25',
    blocks: [
      { type: 'p', text: 'I built a credit scoring system to understand how banks actually approach this problem. Not the academic version. The engineering version. What does it take to go from raw loan data to a system that returns a decision in under 120ms with an explanation attached?' },
      { type: 'h2', text: 'The data pipeline comes first' },
      { type: 'p', text: 'I worked with 307,000 loan records. The raw data had missing values, inconsistent formats, and the usual mess you get from anything that came out of a real system. Before any modeling, I needed a pipeline that could handle new records the same way it handled training data.' },
      { type: 'p', text: 'This is where most tutorials skip ahead. They clean the data manually in a notebook and move on. But if your preprocessing is not reproducible and serializable, your model cannot run in production. I built the pipeline with sklearn\'s Pipeline and ColumnTransformer so that the same transformations applied to training data would apply to inference requests automatically.' },
      { type: 'h2', text: 'Why XGBoost and why it works here' },
      { type: 'p', text: 'Gradient boosted trees handle tabular credit data well for a few reasons. They are robust to outliers, handle missing values natively, and tend to find nonlinear feature interactions that logistic regression misses. They also produce calibrated probabilities, which matters when you are outputting a default probability rather than a binary decision.' },
      { type: 'p', text: 'The model reached a ROC-AUC of 0.79 on holdout data. That is a reasonable number for this type of dataset. It is not impressive in isolation, but the goal was not a number. It was a working system.' },
      { type: 'h2', text: 'SHAP for adverse action explanations' },
      { type: 'callout', text: 'In real lending, you cannot just say "denied." Regulation requires an explanation. SHAP gives you that explanation at the individual prediction level.' },
      { type: 'p', text: 'SHAP (SHapley Additive exPlanations) assigns each feature a contribution score for a specific prediction. For a declined application, I could tell you: the biggest factors were a debt-to-income ratio of 0.61 and 3 derogatory marks. That is an adverse action notice.' },
      { type: 'h2', text: 'The deployment part' },
      { type: 'p', text: 'The model is served via FastAPI. An incoming request hits an endpoint, runs through the same sklearn pipeline, gets scored by XGBoost, and gets SHAP values computed, all in under 120ms on average. The whole thing runs in Docker on AWS Lambda.' },
      { type: 'p', text: 'The engineering side of this project taught me more than the modeling side. Getting a model to run in a notebook is straightforward. Getting it to run reliably, consistently, with explanations, under a latency constraint. That is a different problem.' },
    ],
  },
  {
    slug: 'false-positives-in-fraud',
    title: 'The False Positive Problem in Fraud Detection',
    date: 'Apr 2026',
    readTime: '4 min read',
    summary: 'Blocking a real customer costs almost as much as missing actual fraud. Here is how that constraint changes the way you build the system.',
    tag: 'ML Engineering',
    tagClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/25',
    blocks: [
      { type: 'p', text: 'Most fraud detection tutorials optimize for recall. Catch as much fraud as possible, minimize false negatives. That makes sense if missing fraud is the only cost. But in a real payment system, there is another cost that rarely gets mentioned: the false positive.' },
      { type: 'h2', text: 'What a false decline actually costs' },
      { type: 'p', text: 'When your model blocks a legitimate transaction, a few things happen. The customer is frustrated. They might try again and get blocked again. They might call support. They might never come back. Studies on card fraud put the cost of a false decline (in customer lifetime value terms) somewhere between $7 and $40 per incident, depending on the customer.' },
      { type: 'callout', text: 'For high-value customers making legitimate large purchases, a false decline can cost more than the fraud you were trying to prevent.' },
      { type: 'p', text: 'This changes the problem. You are no longer just minimizing fraud losses. You are minimizing total cost, which includes the cost of blocking real customers.' },
      { type: 'h2', text: 'How this changes the model' },
      { type: 'p', text: 'I built my fraud detection system around this tradeoff explicitly. The ensemble (XGBoost plus Isolation Forest) was tuned for precision at a specific recall threshold rather than just AUC. The threshold was chosen based on the cost ratio: how much does a false positive cost relative to a missed fraud case?' },
      { type: 'p', text: 'The system reached 94.2% precision at the operating threshold. That means about 1 in 17 flagged transactions is a false positive. Whether that is acceptable depends entirely on the cost structure of the business. There is no universally correct number.' },
      { type: 'h2', text: 'The streaming part' },
      { type: 'p', text: 'Fraud scoring has to be real-time. A batch job that scores transactions every hour is useless. The fraud is long gone. I built the pipeline on Kafka with Redis for feature caching, scoring incoming events in under 50ms. The latency constraint is as important as the model accuracy.' },
      { type: 'p', text: 'The thing I took away from this project: the interesting problems in ML engineering are not the modeling problems. They are the constraints the business puts on you that force you to make different choices than you would in a notebook.' },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}
