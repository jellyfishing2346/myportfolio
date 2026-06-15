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
      { type: 'p', text: 'The first time I ran a serious backtest, the numbers looked great. Dual moving average crossover on AAPL, 2020 to 2023, fast period 20, slow period 60. Ten trades, +67% return. I thought I had found something. I had not. I had found a curve-fitted pattern in one ticker over one window that told me almost nothing about the future.' },
      { type: 'h2', text: 'The three things that made my results fake' },
      { type: 'p', text: 'The first was parameter overfitting. I had grid-searched over every combination of fast and slow period and picked the best one on the full dataset. Of course it looked good. I had essentially asked "which parameters would have been best in hindsight?" and used the answer to evaluate the strategy.' },
      { type: 'p', text: 'The second was no transaction costs. Real trades have commission and slippage. My framework defaults to 0.1% commission and 0.05% slippage per trade. Small numbers, but they compound. A strategy that looks like +67% gross can come in significantly lower after realistic costs are applied.' },
      { type: 'p', text: 'The third was in-sample evaluation. I optimized parameters on the full history, then measured performance on the same history. That is not validation. That is memorization.' },
      { type: 'h2', text: 'Walk-forward: what actually works' },
      { type: 'p', text: 'The framework I built has a walk-forward splitter built in. You define a training window and a test window. The optimizer runs a grid search over the training window to find the best parameters, then evaluates those exact parameters on the held-out test window. Then it slides forward and repeats.' },
      { type: 'callout', text: 'Out-of-sample performance is always lower than in-sample. If it is not, you are probably doing something wrong.' },
      { type: 'p', text: 'At the end of a walk-forward run you have out-of-sample results across multiple non-overlapping periods, not one big in-sample number. The Sharpe on my live framework sits at 0.74. That is the out-of-sample number, computed from the test windows, with full transaction costs. It is lower than the in-sample number, and that is the point.' },
      { type: 'h2', text: 'What the system actually does' },
      { type: 'p', text: 'The data layer fetches OHLCV from Yahoo Finance with an Alpha Vantage fallback, caches everything in SQLite with TTL expiry so you are not hitting the API on every run, and validates the schema with Pydantic before anything touches the strategy engine. The strategies run on Backtrader. The analytics layer computes Sharpe, Sortino, max drawdown, win rate, and profit factor from the equity curve. QuantStats handles the tearsheet export.' },
      { type: 'p', text: 'I also built a Plotly Dash dashboard so you can change the ticker, date range, strategy, and parameters interactively and see the equity curve update live. The whole thing has 53 tests. I wanted to be able to trust the numbers.' },
      { type: 'h2', text: 'What I took away from it' },
      { type: 'p', text: 'Backtesting is easy to do badly and hard to do well. The difference between a backtest that means something and one that does not comes down to a few decisions: are your parameters chosen in-sample or out-of-sample, are your costs realistic, is your evaluation set one you have never touched during development. Most published retail backtests fail at least one of those.' },
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
      { type: 'p', text: 'The Home Credit Default Risk dataset is 307,511 loan applications spread across 8 CSV files. There is a main application table and five auxiliary tables covering bureau credit history, previous applications, installment payments, POS cash balance, and credit card balance. The interesting modeling problem is not in the main table. It is in figuring out what to do with all the auxiliary data.' },
      { type: 'h2', text: 'Feature engineering is where the work actually is' },
      { type: 'p', text: 'Each auxiliary table gets its own set of aggregations. Bureau history becomes 13 features: active credit ratio, max overdue days, average credit duration. Previous applications become 10 features: approval rate, average credit requested. Installments become payment ratio and average days late. By the time everything is joined and domain ratios are added, the feature matrix is 176 columns.' },
      { type: 'p', text: 'The single most important feature, by a wide margin, is ext_source_prod23 — the product of EXT_SOURCE_2 and EXT_SOURCE_3. These are external credit scores from two different bureaus. Multiplying them together captures an interaction that neither score captures alone: an applicant who scores poorly on both external sources is a much higher risk than one who scores poorly on just one. That interaction sits at the top of the global SHAP importance chart by a significant gap.' },
      { type: 'h2', text: 'The class imbalance problem' },
      { type: 'p', text: 'Only 8.1% of applications in this dataset are actual defaults. If you train a naive model it will predict "no default" on almost everything and still get 92% accuracy. That accuracy number is meaningless. The real measure is ROC-AUC, which ignores the class distribution.' },
      { type: 'p', text: 'I handled the imbalance by setting scale_pos_weight to 11.3 (the ratio of non-defaults to defaults) and running Optuna hyperparameter optimization for 30 trials tracked in MLflow. The final model hit a validation ROC-AUC of 0.7743 and a test ROC-AUC of 0.7795. Those numbers are stable across the train/val/test split, which matters more than the absolute value.' },
      { type: 'h2', text: 'Explainability without the overhead' },
      { type: 'callout', text: 'In real lending, you cannot just say "denied." Regulation requires an explanation. SHAP gives you that explanation at the individual prediction level, per application, in the same API call.' },
      { type: 'p', text: 'I used XGBoost native TreeSHAP instead of the shap library. XGBoost exposes pred_contribs=True directly, which runs the same SHAP algorithm but avoids the shap/llvmlite dependency entirely. The result is SHAP values per feature per prediction with zero additional inference overhead. A declined application comes back with a list of the top drivers: ext_source_2 decreased risk by X, days_birth increased it by Y. That is an adverse action explanation.' },
      { type: 'h2', text: 'How it runs in production' },
      { type: 'p', text: 'The API is FastAPI with Pydantic v2 validation. A POST to /score accepts whatever fields are available (the model handles missing values through median imputation), runs the sklearn preprocessing pipeline, scores with XGBoost, computes SHAP drivers, and returns a default probability, risk band (LOW / MEDIUM / HIGH), and the top feature contributions in a single response. Warm latency is under 35ms. The whole thing runs in a Docker container on Google Cloud Run. There is also a Streamlit dashboard that calls the live API and visualises the probability gauge and SHAP waterfall chart interactively.' },
      { type: 'p', text: 'The test suite has 41 tests across the pipeline, model training, SHAP, and API layers. The thing I kept coming back to on this project: the hard parts are not the model. They are the preprocessing pipeline that has to be identical between training and inference, the class imbalance that makes every accuracy metric misleading, and getting the explanation out of the model in a way that is actually useful under a latency constraint.' },
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
      { type: 'p', text: 'The performance metrics on my fraud detection engine look like this: 89% recall, 0.98 ROC-AUC, 0.08% false positive rate. Most people reading those numbers focus on the recall. 89% fraud caught sounds good. But the number that actually shaped how I built the system is the 0.08%. That is 8 legitimate transactions flagged for every 10,000 that go through.' },
      { type: 'h2', text: 'Why the false positive rate is the real design constraint' },
      { type: 'p', text: 'At the volume payments companies operate at, 0.08% is not a small number. Run 10 million transactions a day and that is 8,000 customers whose legitimate purchases got blocked. Each one is a support ticket, a potential chargeback dispute, a customer who might not come back. The model that catches 99% of fraud but flags 5% of good transactions is probably worse for the business than one that catches 89% and flags 0.08%.' },
      { type: 'callout', text: 'Optimizing for recall without a constraint on false positives is just moving the cost from one column to another. The threshold is a business decision, not a modeling decision.' },
      { type: 'p', text: 'My system uses a score threshold of 0.4 (not the default 0.5). Anything above 0.4 gets flagged for review. That threshold was chosen by looking at the precision-recall curve and finding the point where the false positive rate crossed 0.1%. The recall at that point is 89%. That tradeoff is the whole design.' },
      { type: 'h2', text: 'What actually makes fraud detectable: the features' },
      { type: 'p', text: 'The model is XGBoost trained on 284,807 transactions, oversampled with SMOTE to handle the class imbalance. The interesting features are not in the raw transaction data. They are the features you have to compute in real time: velocity_1h (how many transactions this user made in the last hour), velocity_24h, geo_distance_km (haversine distance from the last known location), is_new_location, and amount_log. A card being used in two countries within four hours is not something you see in a single row. You need the history.' },
      { type: 'h2', text: 'Why Redis is load-bearing' },
      { type: 'p', text: 'Those velocity and geo features require querying recent transaction history on every incoming event. I store them in Redis sorted sets keyed by user ID, with auto-expiring TTL. The score query is O(log n). That is what gets the warm latency to 2ms. Cold start (first request, no cache) is 27ms. Without the Redis layer, you are hitting PostgreSQL on every score request and the latency number looks very different.' },
      { type: 'h2', text: 'The streaming pipeline' },
      { type: 'p', text: 'Transactions come in through Kafka, partitioned by user_id so all events for the same user land on the same consumer and velocity calculations stay consistent. I used Kafka in KRaft mode, which removes the Zookeeper dependency. The consumer calls the FastAPI scoring endpoint, which hits Redis for features, runs XGBoost inference, and routes the result: score below 0.4 goes to the ledger, score at or above 0.4 goes to the fraud_alerts table and surfaces in the reviewer dashboard for a human decision.' },
      { type: 'p', text: 'I built this solo over 8 weeks. The thing I kept running into: every interesting engineering decision in this system exists because of the false positive constraint. The Redis feature cache, the threshold tuning, the reviewer dashboard for human-in-the-loop review. If you just optimized for recall and did not care about flagging good customers, you would build a much simpler system. The constraint is what makes it interesting.' },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}
