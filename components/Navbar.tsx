'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Blog', href: '/blog' },
  { label: 'Personal', href: '/personal' },
  { label: 'Contact', href: '/#contact' },
]

const PAIRS = [
  {
    quote: "I do wish we could chat longer, but I'm having an old friend for dinner. Bye.",
    audio: '/transition.mp3',
  },
  {
    quote: "You still wake up sometimes, don't you? You wake up in the dark and hear the screaming of the lambs.",
    audio: '/transition-2.mp3',
  },
  {
    quote: "And you think if you save poor Catherine, you could make them stop, don't you? You think if Catherine lives, you won't wake up in the dark ever again to that awful screaming of the lambs.",
    audio: '/transition-3.mp3',
  },
  {
    quote: "What became of your lamb, Clarice?",
    audio: '/transition-4.mp3',
  },
]

type Phase = 'idle' | 'fading' | 'quote'

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [phase, setPhase] = useState<Phase>('idle')
  const [activePair, setActivePair] = useState(PAIRS[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMenuOpen(false)
    const pair = PAIRS[Math.floor(Math.random() * PAIRS.length)]
    setActivePair(pair)
    setPhase('fading')
    setTimeout(() => setPhase('quote'), 700)

    const audio = new Audio(pair.audio)
    let navigated = false
    const navigate = () => {
      if (!navigated) {
        navigated = true
        setPhase('idle')
        router.push(href)
      }
    }
    audio.onended = navigate
    audio.onerror = navigate
    audio.play().catch(navigate)
  }

  return (
    <>
      {/* Hannibal transition overlay */}
      {phase !== 'idle' && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center px-8">
          {phase === 'fading' && (
            <div
              className="absolute inset-0 bg-black"
              style={{ animation: 'fade-to-black 0.7s ease forwards' }}
            />
          )}
          {phase === 'quote' && (
            <div
              className="absolute inset-0 flex items-center justify-center px-8"
              style={{ animation: 'quote-appear 0.6s ease forwards' }}
            >
              <Image
                src="/hannibal.jpg"
                alt="Hannibal Lecter"
                fill
                className="object-cover opacity-20 grayscale"
                priority
              />
              <div className="relative z-10 text-center max-w-lg">
                <p className="text-slate-200 text-xl md:text-2xl italic font-light leading-relaxed drop-shadow-lg">
                  &ldquo;{activePair.quote}&rdquo;
                </p>
                <span className="block text-slate-500 text-sm mt-4 not-italic tracking-widest uppercase">
                  Hannibal Lecter
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[150] bg-[#0a0812]/95 backdrop-blur-xl flex flex-col px-8 pt-28 pb-12 md:hidden">
          <nav className="flex flex-col gap-2 flex-1">
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(href, e)}
                className="text-3xl font-bold text-slate-300 hover:text-violet-300 transition-colors py-3 border-b border-white/5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="/resume.pdf"
            className="mt-6 text-center py-3 rounded-xl border border-violet-400/40 text-violet-300 hover:bg-violet-400/10 transition-all text-sm font-medium"
          >
            Resume ↓
          </a>
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? 'glass border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" onClick={(e) => handleClick('/', e)} className="block w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/hannibal.jpg" alt="Hannibal" width={40} height={40} className="w-full h-full object-cover" style={{ objectPosition: '50% 10%' }} />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(href, e)}
                className="text-sm text-slate-300 hover:text-violet-300 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="text-sm px-4 py-2 rounded-lg border border-violet-400/40 text-violet-300 hover:bg-violet-400/10 hover:border-violet-400/70 transition-all duration-200"
            >
              Resume ↓
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </>
  )
}
