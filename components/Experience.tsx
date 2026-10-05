// Same facts as before, in plainer words. Every number here is something an
// interviewer may ask about, so keep only the ones you can explain in detail.
const EXPERIENCE = [
  {
    role: 'Research Assistant',
    company: 'Brooklyn College',
    period: 'Now',
    details: [
      'Building the pipeline that turns free-text firefighter incident narratives into structured data for NERIS, the federal fire reporting system, using the Claude API and fine-tuned models.',
      'Wrote the Python ETL around it, with validation, schema checks, and anomaly detection. That cut manual processing time by about 40% and data-quality issues by roughly 30%.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Brooklyn College',
    period: 'Now',
    details: [
      'Help students in cybersecurity, web development, AI foundations, and data science courses debug their projects and understand why things work.',
    ],
  },
  {
    role: 'Full Stack Software Engineering Intern',
    company: 'InZone Inc.',
    period: 'Oct – Dec 2025',
    details: [
      'Built Node.js/Express microservices for a backend with 5,000+ daily users and made architecture calls from design through production.',
      'Containerized the services with Docker on GCP (99.9% uptime) and helped four other engineers with API design and coding standards.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'AutoLake LLC',
    period: 'Jul – Sep 2025',
    details: [
      'Standardized REST API contracts across teams at a B2B data lake company, which raised system throughput by about 25%.',
      'Audited production against the OWASP Top 10 and fixed 15+ XSS and CSRF vulnerabilities.',
    ],
  },
  {
    role: 'Treasurer',
    company: 'Brooklyn College Computer Science Club',
    period: 'Now',
    details: [
      'Helped grow the club past 100 active members and organized workshops on AI engineering, full-stack development, and systems design.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-12">Experience</h2>

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
