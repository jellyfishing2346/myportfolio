'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

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

      <section className="px-6 pt-36 pb-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-ink md:text-7xl">Outside work</h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted">
            The things I&rsquo;m into outside of building software, and what actually takes up my
            headspace when I&rsquo;m not in front of a screen.
          </p>

          <div className="mt-20 grid gap-6 border-t border-line pt-12 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Horror films</h2>
            <div>
              <div className="max-w-[40rem] space-y-5 text-lg leading-relaxed text-muted">
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

              <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter films by type">
                {ALL_TAGS.map((tag) => {
                  const active = activeTag === tag
                  return (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      aria-pressed={active}
                      className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                        active
                          ? 'border-ink bg-ink text-paper'
                          : 'border-line text-muted hover:border-line-strong hover:text-ink'
                      }`}
                    >
                      {tag}
                    </button>
                  )
                })}
              </div>

              <ul className="mt-6 divide-y divide-line border-y border-line">
                {visible.map(({ title, year, tag, url }) => (
                  <li key={title}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-baseline justify-between gap-4 py-3.5 transition-colors hover:text-accent"
                    >
                      <span className="font-medium text-ink">
                        {title} <span className="font-normal text-muted">({year})</span>
                      </span>
                      <span className="text-sm text-muted">{tag}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 grid gap-6 border-t border-line pt-12 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Sports</h2>
            <div className="max-w-[40rem] space-y-5 text-lg leading-relaxed text-muted">
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

          <div className="mt-20 grid gap-6 border-t border-line pt-12 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
            <h2 className="text-2xl font-bold tracking-tight text-ink">People</h2>
            <div className="max-w-[40rem] space-y-5 text-lg leading-relaxed text-muted">
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
        </div>
      </section>
    </main>
  )
}
