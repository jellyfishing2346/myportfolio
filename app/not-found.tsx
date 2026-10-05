import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="relative max-w-2xl w-full text-center">

          {/* Dimly lit sorrowful portrait */}
          <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden">
            <Image
              src="/sad-signs.jpg"
              alt="Sad Signs artwork"
              fill
              className="object-cover grayscale opacity-60"
              style={{ objectPosition: '50% 10%' }}
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
          </div>

          <p className="mb-4 text-sm text-muted">Page not found</p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            You&apos;ve wandered somewhere<br />you shouldn&apos;t have.
          </h1>

          <blockquote className="mx-auto mb-10 max-w-lg">
            <p className="text-slate-300 text-base italic font-light leading-relaxed mb-3">
              &ldquo;Sorrow has twelve faces, and every single one is looking for a way out.&rdquo;
            </p>
          </blockquote>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 font-medium text-paper transition-colors hover:bg-accent"
          >
            <ArrowLeft size={15} />
            Back to safety
          </Link>
        </div>
      </div>
    </main>
  )
}
