'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { id: 'projects', label: 'Work', href: '/#projects' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'writing', label: 'Writing', href: '/#writing' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
]

function routeSection(pathname: string) {
  if (pathname.startsWith('/blog')) return 'writing'
  if (pathname.startsWith('/projects')) return 'projects'
  if (pathname.startsWith('/personal')) return 'about'
  return ''
}

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [active, setActive] = useState(routeSection(pathname))
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  // Which home section holds the middle of the screen.
  useEffect(() => {
    if (!isHome) {
      setActive(routeSection(pathname))
      return
    }
    const els = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    const onTop = () => { if (window.scrollY < window.innerHeight * 0.4) setActive('') }
    window.addEventListener('scroll', onTop, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onTop) }
  }, [isHome, pathname])

  // Scroll progress stripe along the bottom of the bar.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-3">
        <div className="slab-wrap mx-auto max-w-[1120px]" style={{ ['--dx' as string]: '5px', ['--dy' as string]: '5px', ['--shadow' as string]: 'var(--slab)' }}>
          <nav
            className="sheet relative flex h-[52px] items-center justify-between pl-1.5 pr-3"
            style={{ ['--cut' as string]: 'polygon(0 0, 100% 0, 99.6% 100%, 0.3% 100%)' }}
            aria-label="Main"
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex h-[40px] w-[40px] items-center justify-center bg-slab font-display text-[15px] font-black tracking-tight text-paper transition-colors hover:bg-field"
              aria-label="Faizan Khan, home"
            >
              FK
            </Link>

            <ul className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map(({ id, label, href }) => {
                const on = active === id
                return (
                  <li key={id}>
                    <Link
                      href={href}
                      aria-current={on ? 'true' : undefined}
                      className={`relative block px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.06em] transition-colors [font-stretch:115%] ${
                        on ? 'text-paper' : 'text-slab hover:text-field'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 -skew-x-[14deg] bg-field transition-transform duration-200 ${on ? 'scale-x-100' : 'scale-x-0'}`}
                      />
                      <span className="relative">{label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a href="/Faizan-Khan-Resume.pdf" className="tag tag-slab hidden sm:inline-block"><span>Résumé</span></a>
              <button
                className="flex h-9 w-9 items-center justify-center text-slab md:hidden"
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </button>
            </div>

            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[3px] bg-field"
              style={{ width: `${progress * 100}%` }}
            />
          </nav>
        </div>
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-40 overflow-hidden bg-slab md:hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-field"
            style={{ clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 35% 100%)' }}
          />
          <nav className="relative flex h-full flex-col justify-center gap-4 px-6 pt-16" aria-label="Mobile">
            {NAV_LINKS.map(({ id, label, href }, i) => {
              const on = active === id
              return (
                <Link
                  key={id}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`self-start -rotate-[5deg] -skew-x-[10deg] px-4 py-1 font-display text-4xl font-black uppercase ${
                    on ? 'bg-paper text-slab' : 'text-paper'
                  }`}
                  style={{ marginLeft: `${i * 0.9}rem` }}
                >
                  <span className="inline-block skew-x-[10deg]">{label}</span>
                </Link>
              )
            })}
            <a href="/Faizan-Khan-Resume.pdf" className="tag tag-gold mt-6 self-start text-sm"><span>Download résumé</span></a>
          </nav>
        </div>
      )}
    </>
  )
}
