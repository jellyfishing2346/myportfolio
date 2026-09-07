'use client'

import { useEffect, useState } from 'react'
import { Linkedin, ArrowDown, TrendingUp, Shield, BarChart3 } from 'lucide-react'
import GithubIcon from '@/components/GithubIcon'

const SPECIALTIES = [
  { Icon: TrendingUp, label: 'Credit risk', color: 'text-[#087f73]' },
  { Icon: Shield, label: 'Fraud detection', color: 'text-[#d8624d]' },
  { Icon: BarChart3, label: 'Quantitative finance', color: 'text-[#52615e]' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex flex-col justify-center items-center px-6 pt-28 pb-16"
    >
      <div
        className={`relative z-10 w-full max-w-6xl transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#087f73]">
          <span className="h-px w-10 bg-[#087f73]" />
          Software engineering student · TA · RA
        </div>

        <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-[0.98] mb-7 text-[#10221f]">
          Software systems for financial data and <span className="gradient-text">intelligent decisions.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#52615e] max-w-2xl mb-10 leading-relaxed">
          I build backend services, real-time data pipelines, and explainable ML systems for fraud detection, credit risk, and quantitative finance.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-14">
          <a
            href="#projects"
            className="px-7 py-3 rounded-lg bg-[#10221f] hover:bg-[#087f73] text-white text-sm font-medium transition-all duration-200"
          >
            View technical work
          </a>
          <a
            href="https://github.com/jellyfishing2346"
            className="flex items-center gap-2 px-7 py-3 rounded-lg glass glass-hover text-[#10221f] text-sm font-medium"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/faizan-khan234"
            className="flex items-center gap-2 px-7 py-3 rounded-lg glass glass-hover text-[#10221f] text-sm font-medium"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {SPECIALTIES.map(({ Icon, label, color }) => (
            <div key={label} className="glass flex items-center gap-2 px-5 py-3 rounded-lg">
              <Icon size={15} className={color} />
              <span className="text-sm text-[#52615e]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#52615e] hover:text-[#087f73] transition-colors animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
