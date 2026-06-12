'use client'

import { useEffect, useState } from 'react'
import { Linkedin, ArrowDown, TrendingUp, Shield, BarChart3 } from 'lucide-react'
import GithubIcon from '@/components/GithubIcon'

const SPECIALTIES = [
  { Icon: TrendingUp, label: 'Credit Risk Modeling', color: 'text-blue-400' },
  { Icon: Shield, label: 'Fraud Detection', color: 'text-emerald-400' },
  { Icon: BarChart3, label: 'Quantitative Finance', color: 'text-violet-400' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-12"
    >
      {/* Floating background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="animate-float absolute top-1/4 left-[15%] w-80 h-80 rounded-full bg-violet-700/25 blur-3xl" />
        <div className="animate-float-delayed absolute top-[30%] right-[15%] w-96 h-96 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="animate-float-slow absolute bottom-[20%] left-[35%] w-72 h-72 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-violet-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to FinTech Roles
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4">
          <span className="gradient-text">Faizan Khan</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 font-light mb-3">
          Software Engineer <span className="text-violet-400 font-normal">×</span> Data Scientist
        </p>
        <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
          Building production-grade ML systems for financial risk, fraud prevention,
          and quantitative strategies.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
          >
            View Projects
          </a>
          <a
            href="https://github.com/jellyfishing2346"
            className="flex items-center gap-2 px-7 py-3 rounded-xl glass glass-hover text-slate-300 text-sm font-medium"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/faizan-khan234"
            className="flex items-center gap-2 px-7 py-3 rounded-xl glass glass-hover text-slate-300 text-sm font-medium"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        {/* Specialty pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {SPECIALTIES.map(({ Icon, label, color }) => (
            <div key={label} className="glass flex items-center gap-2 px-5 py-3 rounded-xl">
              <Icon size={15} className={color} />
              <span className="text-sm text-slate-300">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-violet-400 transition-colors animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
