const EXPERIENCE = [
  {
    role: 'Full Stack Software Engineering Intern',
    company: 'InZone Inc.',
    period: 'Oct – Dec 2025',
    details: [
      'Shipped customer-facing features end to end, building and testing backend REST services in Node.js and Express on GCP, including authentication and real-time event streaming.',
      'Integrated API data flows with strict input validation, then containerized development environments with Docker for reproducible setup and faster onboarding.',
      'Owned features as the sole intern, presenting at weekly planning meetings and making implementation decisions with the team.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'AutoLake LLC',
    period: 'Jul – Sep 2025',
    details: [
      'Diagnosed and fixed 15 performance bugs across backend microservices using profiling and logs.',
      'Improved API consistency across web apps and supported operations with data collection and compliance checks.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'CUNY Brooklyn College',
    period: 'Jun 2024 – Present',
    details: [
      'Built Python ETL and ML workflows with schema enforcement and validation to extract structured data from 450+ pages of curriculum documents.',
      'Deployed research services with Docker and GitHub Actions, adding monitoring that flags anomalies and memory leaks.',
    ],
  },
  {
    role: 'Tech Fellow & Data Science Teaching Assistant',
    company: 'CodePath & CUNY Tech Prep',
    period: 'May 2025 – Present',
    details: [
      'Mentored 100+ students across web development, AI/ML, and cybersecurity courses.',
      'Teach a cohort of 20+ data science students Python, pandas, SQL, data visualization, and core ML.',
    ],
  },
  {
    role: 'Treasurer',
    company: 'CUNY Brooklyn College CS Club',
    period: 'Present',
    details: [
      'Redirected most of the food budget to fund the club’s first hackathon, winning e-board and student government approval.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="section-title">Experience</h2>
          <p className="text-sm text-muted">Work, research, and teaching</p>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map(({ role, company, period, details }) => (
            <article key={`${role}-${company}`} className="grid gap-2 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
              <div>
                <p className="text-sm text-muted">{period}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{role}</h3>
                <p className="mb-3 text-accent">{company}</p>
                <ul className="max-w-[40rem] list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-line-strong">
                  {details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
