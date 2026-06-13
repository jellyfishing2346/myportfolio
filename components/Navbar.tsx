'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Personal', href: '/personal' },
  { label: 'Contact', href: '/#contact' },
]

const PAIRS = [
  {
    quote: "I do wish we could chat longer, but I'm having an old friend for dinner.",
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
  const [phase, setPhase] = useState<Phase>('idle')
  const [activePair, setActivePair] = useState(PAIRS[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
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
      {phase !== 'idle' && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center px-8">
          {phase === 'fading' && (
            <div
              className="absolute inset-0 bg-black"
              style={{ animation: 'fade-to-black 0.7s ease forwards' }}
            />
          )}
          {phase === 'quote' && (
            <p
              className="text-slate-300 text-xl md:text-2xl italic font-light text-center max-w-lg leading-relaxed"
              style={{ animation: 'quote-appear 0.6s ease forwards' }}
            >
              &ldquo;{activePair.quote}&rdquo;
              <span className="block text-slate-500 text-sm mt-4 not-italic tracking-widest uppercase">
                Hannibal Lecter
              </span>
            </p>
          )}
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-white/10' : 'bg-transparent'
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

          {/* Mobile nav */}
          <div className="md:hidden flex gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} onClick={(e) => handleClick(href, e)} className="text-xs text-slate-400 hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
