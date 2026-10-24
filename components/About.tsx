import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Mail, FileText } from 'lucide-react'
import GithubIcon from '@/components/GithubIcon'
import StatusTicker from '@/components/StatusTicker'
import { SectionHeading } from '@/components/ui'

const TOOLBOX = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'Express'] },
  { group: 'Frontend', items: ['React', 'Next.js'] },
  { group: 'Data', items: ['PostgreSQL', 'Kafka', 'Redis', 'pandas', 'XGBoost'] },
  { group: 'Infra', items: ['Docker', 'AWS', 'GCP', 'GitHub Actions'] },
]

const SOCIALS = [
  { href: 'https://github.com/jellyfishing2346', label: 'GitHub', Icon: GithubIcon },
  { href: 'https://linkedin.com/in/faizan-khan234', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:faizan.khan.intern02@gmail.com', label: 'Email', Icon: Mail },
  { href: '/Faizan-Khan-Resume.pdf', label: 'Résumé', Icon: FileText },
]

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About" />

        <div className="grid gap-5 md:grid-cols-12">
          {/* Tagline */}
          <div className="slab-wrap md:col-span-7 lg:col-span-5 lg:row-span-2">
            <div className="slab cut-a flex h-full flex-col justify-between gap-10 p-7 md:p-9">
              <p className="text-[clamp(1.8rem,1.3rem+1.8vw,2.7rem)] font-black leading-[1.02] [font-stretch:118%]">
                I build systems for messy, real-world data.
              </p>
              <div>
                <p className="text-fog">B.S. Computer Science, minor in Data Science</p>
                <p className="text-fog">CUNY Brooklyn College, expected Dec 2027, GPA 3.8</p>
                <Link href="/personal" className="btn btn-sm mt-6"><span>Life outside code</span></Link>
              </div>
            </div>
          </div>

          {/* Portrait + status */}
          <div className="slab-wrap md:col-span-5 lg:col-span-3 lg:row-span-2">
            <div className="slab cut-b flex h-full flex-col p-2.5">
              <div className="duotone relative aspect-square w-full md:aspect-auto md:flex-1">
                <Image
                  src="/avatar.jpg"
                  alt="Faizan standing in front of a brick building on campus"
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-2.5">
                <StatusTicker />
              </div>
            </div>
          </div>

          {/* Toolbox */}
          <div className="slab-wrap md:col-span-12 lg:col-span-4 lg:row-span-2">
            <div className="slab cut-c h-full p-7">
              <h3 className="tag mb-6"><span>Tools I use</span></h3>
              <dl className="space-y-5">
                {TOOLBOX.map(({ group, items }) => (
                  <div key={group}>
                    <dt className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-gold">{group}</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {items.map((t) => (
                        <span key={t} className="border border-white/20 px-2 py-1 text-[13px] font-semibold">{t}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Story */}
          <div className="slab-wrap md:col-span-12 lg:col-span-8">
            <div className="sheet cut-d p-7 md:p-10">
              <h3 className="tag tag-slab mb-6"><span>The longer version</span></h3>
              <div className="grid gap-5 leading-relaxed text-slab/80 md:grid-cols-2 md:gap-8">
                <p>
                  I got into software engineering first. Fintech came later, while I was figuring
                  out what kind of engineer I wanted to be. I started reading about how financial
                  systems work, then built projects to understand the ideas instead of leaving
                  them as notes in a notebook.
                </p>
                <p>
                  Most of my week is split between research, teaching, and building. At Brooklyn
                  College I work on turning firefighter incident reports into data people can
                  actually query. As a teaching assistant, I help students in cybersecurity, web development,
                  AI, and data science understand both the
                  code and the reason behind it.
                </p>
                <p>
                  I like work that rewards careful thinking: defining the data model, testing the
                  uncomfortable cases, and being honest when a result is weaker than the first
                  version suggested. That is usually more interesting to me than making a demo
                  look impressive.
                </p>
                <p>
                  Outside class I&rsquo;m involved with Project Alpaca, CUNY Tech Prep, CodePath,
                  and the CS Club.
                </p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="slab-wrap md:col-span-12 lg:col-span-4">
            <div className="slab cut-a flex h-full flex-col gap-6 p-7">
              <h3 className="tag tag-gold self-start"><span>Find me</span></h3>
              <ul className="grid flex-1 grid-cols-2 gap-3">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex h-full min-h-[84px] flex-col items-center justify-center gap-2 bg-paper text-slab shadow-[4px_4px_0_var(--field)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-gold hover:shadow-[6px_6px_0_var(--field)]"
                    >
                      <Icon size={26} />
                      <span className="text-sm font-extrabold [font-stretch:112%]">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
