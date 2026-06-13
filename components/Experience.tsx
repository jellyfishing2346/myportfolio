import { GraduationCap, Briefcase, Users } from 'lucide-react'

const EDUCATION = [
  {
    degree: 'B.S. Computer Science, Minor in Data Science',
    school: 'CUNY Brooklyn College',
    location: 'Brooklyn, NY',
    period: 'Expected May 2026',
    details: [
      'Relevant coursework: Data Structures, Analysis of Algorithms, Data Tools & Algorithms, Machine Learning',
      'Minor in Data Science — bridging statistical modeling with production engineering',
    ],
  },
]

const EXPERIENCE = [
  {
    role: 'Research Assistant',
    company: 'Brooklyn College',
    location: 'Brooklyn, NY',
    period: 'Jun 2024 – May 2026',
    details: [
      'Engineered a production ML pipeline for NERIS — a federal firefighter reporting system — using the Anthropic Claude API and fine-tuned models to extract structured data from unstructured narratives at scale',
      'Built Python ETL pipelines with automated validation, schema enforcement, and anomaly detection, cutting manual processing time by 40% and reducing data quality incidents by ~30%',
    ],
  },
  {
    role: 'Full Stack Software Engineering Intern',
    company: 'InZone Inc.',
    location: 'Remote',
    period: 'Oct 2025 – Dec 2025',
    details: [
      'Owned end-to-end delivery of a distributed microservices backend in Node.js/Express serving 5,000+ daily active users — led architecture decisions from system design through production monitoring',
      'Containerized multi-service applications with Docker and GCP achieving 99.9% uptime; mentored 4 engineers on API design and coding standards',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'AutoLake LLC',
    location: 'San Francisco, CA (Remote)',
    period: 'Jul 2025 – Sep 2025',
    details: [
      'Drove a 25% increase in system throughput at a B2B data lake infrastructure company by standardizing RESTful API contracts across engineering teams',
      'Identified and remediated 15+ critical security vulnerabilities (XSS, CSRF) through systematic OWASP-aligned production audits',
    ],
  },
]

const LEADERSHIP = {
  role: 'Student Treasurer',
  org: 'Brooklyn College Computer Science Club',
  period: 'Jun 2023 – May 2026',
  detail: 'Scaled active membership to 100+ students; coordinated technical workshops on AI engineering, full-stack development, and systems design.',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">Background</p>
          <h2 className="text-4xl font-bold text-white">Education & Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Education */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/20 flex items-center justify-center">
                <GraduationCap size={15} className="text-blue-400" />
              </div>
              <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Education</h3>
            </div>

            {EDUCATION.map(({ degree, school, location, period, details }) => (
              <div key={school}>
                <div className="flex items-start justify-between mb-1">
                  <span className="text-white font-semibold text-sm leading-snug pr-4">{degree}</span>
                  <span className="text-slate-500 text-xs flex-shrink-0">{period}</span>
                </div>
                <p className="text-violet-300 text-sm mb-1">{school}</p>
                <p className="text-slate-500 text-xs mb-4">{location}</p>
                <ul className="space-y-2">
                  {details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-400/20 flex items-center justify-center">
                <Briefcase size={15} className="text-violet-400" />
              </div>
              <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider">Experience</h3>
            </div>

            <div className="space-y-6">
              {EXPERIENCE.map(({ role, company, location, period, details }) => (
                <div key={`${role}-${company}`} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-0.5">
                    <span className="text-white font-semibold text-sm">{role}</span>
                    <span className="text-slate-500 text-xs ml-3 flex-shrink-0">{period}</span>
                  </div>
                  <p className="text-violet-300 text-sm mb-0.5">{company}</p>
                  <p className="text-slate-500 text-xs mb-3">{location}</p>
                  <ul className="space-y-1.5">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="glass rounded-2xl px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center flex-shrink-0">
            <Users size={15} className="text-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-1">
              <span className="text-white font-semibold text-sm">{LEADERSHIP.role}</span>
              <span className="text-violet-300 text-sm">{LEADERSHIP.org}</span>
              <span className="text-slate-500 text-xs">{LEADERSHIP.period}</span>
            </div>
            <p className="text-slate-400 text-sm">{LEADERSHIP.detail}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
