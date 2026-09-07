import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import GithubIcon from '@/components/GithubIcon'
import Navbar from '@/components/Navbar'
import type { Project } from '@/app/projects/_data'

export default function CaseStudy({ project }: { project: Project }) {
  const {
    badge,
    badgeClass,
    Icon,
    iconClass,
    accentLine,
    borderHover,
    title,
    objective,
    metrics,
    stack,
    githubUrl,
    demoUrl,
    featured,
  } = project

  return (
    <main className="relative z-10">
      <Navbar />

      <article className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-300 text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>

          {/* Header card — same visual language as ProjectCard */}
          <div className={`glass rounded-2xl overflow-hidden border border-white/10 ${borderHover} transition-all duration-300`}>
            <div className="h-0.5 w-full" style={{ background: accentLine }} />

            <div className="p-8 md:p-10">
              {featured && (
                <div className="mb-3 inline-flex items-center gap-1.5 text-xs text-violet-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  Primary Focus
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs px-3 py-1 rounded-full border font-medium ${badgeClass}`}>
                  {badge}
                </span>
                <Icon size={22} className={iconClass} />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-8">{objective}</p>

              <p className="text-xs text-slate-500 mb-4">
                Results shown are project benchmarks measured in a development or evaluation environment, not production guarantees.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mb-8">
                {metrics.map(({ label, value }) => (
                  <div key={label} className="text-center p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div className="text-xs text-slate-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {stack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded text-xs bg-white/[0.05] text-slate-400 border border-white/[0.06]">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={githubUrl}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-slate-300 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200"
                >
                  <GithubIcon size={15} /> View Code
                </a>
                {demoUrl && (
                  <a
                    href={demoUrl}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-violet-300 border border-violet-400/30 hover:bg-violet-400/10 transition-all duration-200"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Long-form notes — placeholders for later */}
          <div className="mt-8 space-y-6">
            <div className="glass rounded-2xl p-8 md:p-10">
              <h2 className="text-xl font-bold text-white mb-3">How it works</h2>
              <p className="text-slate-500 text-sm italic">Notes coming soon.</p>
            </div>

            <div className="glass rounded-2xl p-8 md:p-10">
              <h2 className="text-xl font-bold text-white mb-3">What broke / what I&apos;d change</h2>
              <p className="text-slate-500 text-sm italic">Notes coming soon.</p>
            </div>
          </div>

        </div>
      </article>
    </main>
  )
}
