'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { SectionHeading } from '@/components/ui'

const FILMS = [
  { title: 'The Shining',              year: '1980', tag: 'Psychological', url: 'https://www.imdb.com/title/tt0081505/' },
  { title: 'Carrie',                   year: '1976', tag: 'Revenge',       url: 'https://www.imdb.com/title/tt0074285/' },
  { title: 'Scream',                   year: '1996', tag: 'Meta Slasher',  url: 'https://www.imdb.com/title/tt0117571/' },
  { title: 'A Nightmare on Elm Street',year: '1984', tag: 'Classic',       url: 'https://www.imdb.com/title/tt0087800/' },
  { title: 'Green Inferno',            year: '2013', tag: 'Extreme',       url: 'https://www.imdb.com/title/tt2403021/' },
  { title: 'Revenge',                  year: '2017', tag: 'Revenge',       url: 'https://www.imdb.com/title/tt6738136/' },
  { title: 'Even Lambs Have Teeth',    year: '2015', tag: 'Revenge',       url: 'https://www.imdb.com/title/tt4147210/' },
  { title: 'Truth or Dare',            year: '2018', tag: 'Supernatural',  url: 'https://www.imdb.com/title/tt6772950/' },
  { title: 'Pretty Lethal',            year: '2023', tag: 'Thriller',      url: 'https://www.imdb.com/title/tt26678938/' },
  { title: 'Fear',                     year: '1996', tag: 'Psychological', url: 'https://www.imdb.com/title/tt0116287/' },
  { title: 'Happy Death Day',          year: '2017', tag: 'Time Loop',     url: 'https://www.imdb.com/title/tt5308322/' },
  { title: 'The First Purge',          year: '2018', tag: 'Social Horror', url: 'https://www.imdb.com/title/tt6133466/' },
]

const ALL_TAGS = ['All', ...Array.from(new Set(FILMS.map((f) => f.tag)))]

export default function Personal() {
  const [activeTag, setActiveTag] = useState<string>('All')
  const visible = activeTag === 'All' ? FILMS : FILMS.filter((f) => f.tag === activeTag)

  return (
    <main className="relative z-10">
      <Navbar />

      <section className="px-4 pb-28 pt-36 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            as="h1"
            title="Outside work"
            note="The things I’m into outside of building software, and what actually takes up my headspace when I’m not in front of a screen."
          />

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Horror films */}
            <section className="slab-wrap lg:col-span-7 lg:row-span-2">
              <div className="slab cut-a h-full p-7 md:p-10">
                <h2 className="tag tag-gold"><span>Horror films</span></h2>
                <div className="mt-6 max-w-[40rem] space-y-4 leading-relaxed text-fog">
                  <p>
                    I&rsquo;m a horror film obsessive, specifically drawn to revenge narratives where the
                    power dynamic flips completely. The tension before the shift is what gets me.
                  </p>
                  <p>
                    Carrie, Revenge, Even Lambs Have Teeth. Stories about someone being underestimated
                    and then becoming the threat tend to stay with me long after the credits. The Shining
                    is the gold standard for dread built through atmosphere rather than jump scares.
                    Scream earns its place for being self-aware enough to rewrite the rules while
                    following them.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter films by type">
                  {ALL_TAGS.map((tag) => {
                    const active = activeTag === tag
                    return (
                      <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        aria-pressed={active}
                        className={`-skew-x-[10deg] px-3 py-1.5 text-sm font-bold transition-colors ${
                          active ? 'bg-gold text-slab' : 'bg-white/10 text-paper hover:bg-white/20'
                        }`}
                      >
                        <span className="inline-block skew-x-[10deg]">{tag}</span>
                      </button>
                    )
                  })}
                </div>

                <ul className="mt-6 divide-y divide-white/15 border-y border-white/15">
                  {visible.map(({ title, year, tag, url }) => (
                    <li key={title}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline justify-between gap-4 py-3.5"
                      >
                        <span className="font-bold group-hover:text-gold">
                          {title} <span className="font-normal text-fog">({year})</span>
                        </span>
                        <span className="font-mono text-xs text-fog">{tag}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Sports */}
            <section className="slab-wrap lg:col-span-5 lg:rotate-[0.8deg]">
              <div className="sheet cut-b h-full p-7 md:p-9">
                <h2 className="tag tag-slab"><span>Sports</span></h2>
                <div className="mt-6 space-y-4 leading-relaxed text-slab/80">
                  <p>
                    I play soccer and football, nothing competitive, just pickup games where
                    you actually have to think and move at the same time. It&rsquo;s the kind of
                    physical reset that sitting at a desk all day doesn&rsquo;t give you.
                  </p>
                  <p>
                    Outside of team sports, I exercise regularly. It keeps me focused and I
                    notice the difference on days I don&rsquo;t.
                  </p>
                </div>
              </div>
            </section>

            {/* People */}
            <section className="slab-wrap lg:col-span-5 lg:-rotate-[0.6deg]">
              <div className="sheet cut-d h-full p-7 md:p-9">
                <h2 className="tag tag-field"><span>People</span></h2>
                <div className="mt-6 space-y-4 leading-relaxed text-slab/80">
                  <p>
                    I&rsquo;m someone who genuinely values time with people, whether that&rsquo;s watching a
                    film together or just hanging out with nothing planned. The social side of life
                    matters as much to me as the technical side.
                  </p>
                  <p>
                    My friends mostly don&rsquo;t know what quantitative finance is. I&rsquo;m working on
                    explaining it in a way that doesn&rsquo;t make their eyes glaze over.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
