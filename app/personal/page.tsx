import Navbar from '@/components/Navbar'
import { Film, Dumbbell, Users } from 'lucide-react'

const FILMS = [
  { title: 'The Shining',              year: '1980', tag: 'Psychological' },
  { title: 'Carrie',                   year: '1976', tag: 'Revenge'       },
  { title: 'Scream',                   year: '1996', tag: 'Meta Slasher'  },
  { title: 'A Nightmare on Elm Street',year: '1984', tag: 'Classic'       },
  { title: 'Green Inferno',            year: '2013', tag: 'Extreme'       },
  { title: 'Revenge',                  year: '2017', tag: 'Revenge'       },
  { title: 'Even Lambs Have Teeth',    year: '2015', tag: 'Revenge'       },
]

const TAG_COLORS: Record<string, string> = {
  'Psychological': 'bg-violet-500/15 text-violet-300 border-violet-400/25',
  'Revenge':       'bg-red-500/15    text-red-300    border-red-400/25',
  'Meta Slasher':  'bg-blue-500/15   text-blue-300   border-blue-400/25',
  'Classic':       'bg-amber-500/15  text-amber-300  border-amber-400/25',
  'Extreme':       'bg-rose-500/15   text-rose-300   border-rose-400/25',
}

export default function Personal() {
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
              The things I'm into outside of building software — what actually takes up my headspace
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
                I'm a horror film obsessive — specifically drawn to revenge narratives where the
                power dynamic flips completely. The tension before the shift is what gets me.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Carrie, Revenge, Even Lambs Have Teeth — stories about someone being underestimated
                and then becoming the threat tend to stay with me long after the credits. The Shining
                is the gold standard for dread built through atmosphere rather than jump scares.
                Scream earns its place for being self-aware enough to rewrite the rules while
                following them.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {FILMS.map(({ title, year, tag }) => (
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
                  {/* ← Update this with the sports you actually play or follow */}
                  Playing and watching sports is how I decompress. There's something about the
                  real-time strategy and unpredictability that I find genuinely absorbing —
                  no two games play out the same way.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {/* ← Add specifics: which sports, what you play, what you follow */}
                  Update this with the sports you actually play or follow — the more specific
                  the better. "I play basketball" is fine. "I track my shot charts in pickup
                  games" is better.
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
                  I'm someone who genuinely values time with people — whether that's watching a
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
