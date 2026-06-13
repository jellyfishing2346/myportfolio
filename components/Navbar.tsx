'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Personal', href: '/personal' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="block w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image src="/hannibal.jpg" alt="Hannibal" width={40} height={40} className="w-full h-full object-cover" style={{ objectPosition: '50% 10%' }} />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
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
            <a key={href} href={href} className="text-xs text-slate-400 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
