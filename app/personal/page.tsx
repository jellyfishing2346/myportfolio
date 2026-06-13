'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { Film, Dumbbell, Users, ChevronLeft, ChevronRight } from 'lucide-react'

const FILMS = [
  { title: 'The Shining',              year: '1980', tag: 'Psychological' },
  { title: 'Carrie',                   year: '1976', tag: 'Revenge'       },
  { title: 'Scream',                   year: '1996', tag: 'Meta Slasher'  },
  { title: 'A Nightmare on Elm Street',year: '1984', tag: 'Classic'       },
  { title: 'Green Inferno',            year: '2013', tag: 'Extreme'       },
  { title: 'Revenge',                  year: '2017', tag: 'Revenge'       },
  { title: 'Even Lambs Have Teeth',    year: '2015', tag: 'Revenge'       },
  { title: 'Truth or Dare',            year: '2018', tag: 'Supernatural'  },
  { title: 'Pretty Lethal',            year: '2023', tag: 'Thriller'      },
  { title: 'Fear',                     year: '1996', tag: 'Psychological' },
  { title: 'Happy Death Day',          year: '2017', tag: 'Time Loop'     },
  { title: 'The First Purge',          year: '2018', tag: 'Social Horror' },
]

const TAG_COLORS: Record<string, string> = {
  'Psychological': 'bg-violet-500/15 text-violet-300 border-violet-400/25',
  'Revenge':       'bg-red-500/15    text-red-300    border-red-400/25',
  'Meta Slasher':  'bg-blue-500/15   text-blue-300   border-blue-400/25',
  'Classic':       'bg-amber-500/15  text-amber-300  border-amber-400/25',
  'Extreme':       'bg-rose-500/15   text-rose-300   border-rose-400/25',
  'Supernatural':  'bg-purple-500/15 text-purple-300 border-purple-400/25',
  'Thriller':      'bg-orange-500/15 text-orange-300 border-orange-400/25',
  'Time Loop':     'bg-cyan-500/15   text-cyan-300   border-cyan-400/25',
  'Social Horror': 'bg-yellow-500/15 text-yellow-300 border-yellow-400/25',
}

const ALL_TAGS = ['All', ...Array.from(new Set(FILMS.map((f) => f.tag)))]
const PER_PAGE = 4

export default function Personal() {
  const [activeTag, setActiveTag] = useState<string>('All')
  const [page, setPage] = useState(0)

  const filtered = activeTag === 'All' ? FILMS : FILMS.filter((f) => f.tag === activeTag)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const visible = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  useEffect(() => { setPage(0) }, [activeTag])

  return (
    <main className="relative z-10">
      <Navbar />

      <section className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">
              The Human Behind the Code
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Beyond the Resume
            </h1>
            <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
              The things I'm into outside of building software, and what actually takes up my headspace
              when I'm not in front of a screen.
            </p>
          </div>

          <div className="space-y-6">

            {/* Horror Films */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-400/20 flex items-center justify-center">
                  <Film size={15} className="text-red-400" />
                </div>
                <h2 className="text-sm font-semibold text-red-300 uppercase tracking-wider">
                  Horror Films
                </h2>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                I'm a horror film obsessive, specifically drawn to revenge narratives where the
                power dynamic flips completely. The tension before the shift is what gets me.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Carrie, Revenge, Even Lambs Have Teeth. Stories about someone being underestimated
                and then becoming the threat tend to stay with me long after the credits. The Shining
                is the gold standard for dread built through atmosphere rather than jump scares.
                Scream earns its place for being self-aware enough to rewrite the rules while
                following them.
              </p>

              {/* Filter buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {ALL_TAGS.map((tag) => {
                  const isAll = tag === 'All'
                  const active = activeTag === tag
                  const colorClass = isAll ? 'bg-white/10 text-white border-white/20' : TAG_COLORS[tag]
                  return (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200 ${
                        active
                          ? `${colorClass} opacity-100 scale-105`
                          : 'bg-white/[0.04] text-slate-500 border-white/10 hover:text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {tag}
                    </button>
                  )
                })}
              </div>

              {/* Carousel */}
              <div className="relative">
                <div className="grid sm:grid-cols-2 gap-3 min-h-[112px]">
                  {visible.map(({ title, year, tag }) => (
                    <div
                      key={title}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                    >
                      <div>
                        <p className="text-white text-sm font-medium">{title}</p>
                        <p className="text-slate-500 text-xs">{year}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${TAG_COLORS[tag]}`}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Prev / Next + counter */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => setPage((p) => Math.max(p - 1, 0))}
                      disabled={page === 0}
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft size={15} /> Prev
                    </button>
                    <span className="text-xs text-slate-600">
                      {page + 1} / {totalPages}
                    </span>
                    <button
                      onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                      disabled={page === totalPages - 1}
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                    >
                      Next <ChevronRight size={15} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Sports */}
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center">
                    <Dumbbell size={15} className="text-emerald-400" />
                  </div>
                  <h2 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">
                    Sports
                  </h2>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  I play soccer and football, nothing competitive, just pickup games where
                  you actually have to think and move at the same time. It's the kind of
                  physical reset that sitting at a desk all day doesn't give you.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Outside of team sports, I exercise regularly. It keeps me focused and I
                  notice the difference on days I don't.
                </p>
              </div>

              {/* Social */}
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/20 flex items-center justify-center">
                    <Users size={15} className="text-blue-400" />
                  </div>
                  <h2 className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                    Outside of Work
                  </h2>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  I'm someone who genuinely values time with people, whether that's watching a
                  film together or just hanging out with nothing planned. The social side of life
                  matters as much to me as the technical side.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  My friends mostly don't know what quantitative finance is. I'm working on
                  explaining it in a way that doesn't make their eyes glaze over.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
