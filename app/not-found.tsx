import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="relative max-w-2xl w-full text-center">

          {/* Dimly lit Hannibal portrait */}
          <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden">
            <Image
              src="/hannibal.jpg"
              alt="Hannibal Lecter"
              fill
              className="object-cover grayscale opacity-60"
              style={{ objectPosition: '50% 10%' }}
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
          </div>

          <p className="text-xs text-violet-400 uppercase tracking-widest mb-4 font-medium">
            404
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            You&apos;ve wandered somewhere<br />you shouldn&apos;t have.
          </h1>

          <blockquote className="glass rounded-2xl px-8 py-6 mb-8 max-w-lg mx-auto">
            <p className="text-slate-300 text-base italic font-light leading-relaxed mb-3">
              &ldquo;Of all the things the pages of my memory have to offer,
              I find your curiosity most… interesting.&rdquo;
            </p>
            <span className="text-slate-500 text-xs uppercase tracking-widest">
              Hannibal Lecter
            </span>
          </blockquote>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
          >
            <ArrowLeft size={15} />
            Back to safety
          </a>
        </div>
      </div>
    </main>
  )
}
