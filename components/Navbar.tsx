'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Work', href: '/#projects' },
  { label: 'Systems', href: '/#skills' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
    router.push(href)
  }

  return (
    <>
      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[150] bg-[#0a0812]/95 backdrop-blur-xl flex flex-col px-8 pt-28 pb-12 md:hidden">
          <nav className="flex flex-col gap-2 flex-1">
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(href, e)}
                className="text-3xl font-bold text-[#10221f] hover:text-[#087f73] transition-colors py-3 border-b border-[#10221f]/10"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? 'bg-[#f3f0e8]/90 backdrop-blur-md border-b border-[#10221f]/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" onClick={(e) => handleClick('/', e)} className="flex items-center gap-3 text-[#10221f]">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#10221f]/10 bg-[#f3f0e8]">
              <Image src="/brand-mark.png" alt="Faizan Khan mark" width={36} height={36} className="h-full w-full object-contain" priority />
            </span>
            <span className="hidden sm:block text-sm font-semibold tracking-tight">Faizan Khan</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(href, e)}
                className="text-sm text-[#52615e] hover:text-[#087f73] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#10221f] hover:text-[#087f73] transition-colors p-1"
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
