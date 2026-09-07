import { Briefcase, GraduationCap } from 'lucide-react'

const EDUCATION = [
  {
    degree: 'B.S. Computer Science, Minor in Data Science',
    school: 'CUNY Brooklyn College',
    location: 'Brooklyn, NY',
    period: 'Current',
    details: [
      'Relevant coursework: Data Structures, Analysis of Algorithms, Data Tools & Algorithms, Machine Learning',
      'Minor in Data Science',
    ],
  },
]

const EXPERIENCE = [
  {
    role: 'Research Assistant',
    company: 'Brooklyn College',
    location: 'Brooklyn, NY',
    period: 'Current',
    details: [
      'Engineered a production ML pipeline for NERIS (a federal firefighter reporting system) using the Anthropic Claude API and fine-tuned models to extract structured data from unstructured narratives at scale',
      'Built Python ETL pipelines with automated validation, schema enforcement, and anomaly detection, cutting manual processing time by 40% and reducing data quality incidents by ~30%',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Brooklyn College',
    location: 'Brooklyn, NY',
    period: 'Current',
    details: [
      'Support instruction across cybersecurity, web development, AI foundations, and data science through technical guidance and project debugging',
      'Translate complex engineering concepts into clear explanations while helping students build practical solutions',
    ],
  },
  {
    role: 'Full Stack Software Engineering Intern',
    company: 'InZone Inc.',
    location: 'Remote',
    period: 'Oct 2025 – Dec 2025',
    details: [
      'Built and shipped a distributed microservices backend in Node.js/Express serving 5,000+ daily active users, owning architecture decisions from design through production',
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
      'Found and fixed 15+ security vulnerabilities (XSS, CSRF) through a production audit against the OWASP top 10',
    ],
  },
]

const LEADERSHIP = {
  role: 'Student Treasurer',
  company: 'Brooklyn College Computer Science Club',
  location: 'Brooklyn, NY',
  period: 'Current',
  details: ['Scaled active membership to 100+ students and coordinated workshops on AI engineering, full-stack development, and systems design.'],
}

const ACTIVITIES = ['Project Alpaca', 'Brooklyn College Computer Science Club', 'CUNY Tech Prep']

export default function Experience() {
  return (
    <>
      <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">Where I have contributed</p>
          <h2 className="text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="relative ml-2 border-l border-[#087f73]/25 pl-7">
          {[...EXPERIENCE, LEADERSHIP].map(({ role, company, location, period, details }) => (
            <article key={`${role}-${company}`} className="relative pb-9 last:pb-0">
              <span className="absolute -left-[2.05rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#f3f0e8] bg-[#087f73]" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-white">{role}</h3>
                <span className="text-xs text-slate-500">{period}</span>
              </div>
              <p className="mt-1 text-sm text-violet-300">{company}</p>
              <p className="mt-0.5 text-xs text-slate-500">{location}</p>
              <ul className="mt-3 space-y-1.5">
                {details.map((detail) => (
                  <li key={detail} className="flex max-w-3xl items-start gap-2 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#087f73]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      </section>

      <section id="activities" className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="border-t border-[#10221f]/10 pt-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-violet-400">Activities</p>
            <ul className="space-y-3">
              {ACTIVITIES.map((activity) => (
                <li key={activity} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d8624d]" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-blue-400 uppercase tracking-widest mb-3 font-medium">Academic foundation</p>
            <h2 className="text-4xl font-bold text-white">Education</h2>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 border border-blue-400/20">
                <GraduationCap size={15} className="text-blue-400" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-300">Current studies</span>
            </div>
            {EDUCATION.map(({ degree, school, location, period, details }) => (
              <div key={school}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <span className="text-white font-semibold text-sm leading-snug pr-4">{degree}</span>
                  <span className="text-slate-500 text-xs">{period}</span>
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
        </div>
      </section>
    </>
  )
}
