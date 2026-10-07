'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Work', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
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
      {menuOpen && (
        <div className="fixed inset-0 z-[40] flex flex-col bg-paper px-8 pt-28 pb-12 md:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(href, e)}
                className="border-b border-line py-4 text-3xl font-bold text-ink hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          scrolled || menuOpen ? 'bg-paper/95 backdrop-blur border-b border-line' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" onClick={(e) => handleClick('/', e)} className="flex items-center gap-3 text-ink">
            <span className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image src="/avatar.jpg" alt="" fill sizes="32px" className="object-cover" />
            </span>
            <span className="font-semibold">Faizan Khan</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(href, e)}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            className="p-1 text-ink transition-colors hover:text-accent md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </>
  )
}
