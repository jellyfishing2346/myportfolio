'use client'

import { useEffect, useState } from 'react'

const LINES = [
  'Looking for an entry-level SWE role',
  'Building a walk-forward optimizer',
  'Reading Advances in Financial ML',
  'Teaching 20+ data science students',
]

export default function StatusTicker() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || paused) return
    const t = setInterval(() => setI((n) => (n + 1) % LINES.length), 3600)
    return () => clearInterval(t)
  }, [paused])

  return (
    <div
      className="bg-paper px-3 py-2.5 text-slab"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-field">
        <span className="inline-block h-2 w-2 rotate-45 bg-gold" aria-hidden="true" /> Status
      </p>
      <p key={i} className="caret mt-1 text-[13px] font-bold leading-snug">{LINES[i]}</p>
    </div>
  )
}
