import { SectionHeading } from '@/components/ui'

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
    <section id="experience" className="px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Experience" note="Work, research, and teaching." />

        <div className="slab-wrap">
          <ol className="slab cut-c divide-y divide-white/15 px-6 sm:px-10">
            {EXPERIENCE.map(({ role, company, period, details }) => (
              <li key={`${role}-${company}`} className="group grid gap-4 py-9 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <span className="tag tag-gold"><span>{period}</span></span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-black leading-tight [font-stretch:115%] md:text-2xl">{role}</h3>
                  <p className="mt-1 font-semibold text-[#8fb0ff]">{company}</p>
                  <ul className="mt-4 max-w-[44rem] space-y-2.5 leading-relaxed text-fog">
                    {details.map((d) => (
                      <li key={d} className="relative pl-5">
                        <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rotate-45 bg-white/40 transition-colors group-hover:bg-gold" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
