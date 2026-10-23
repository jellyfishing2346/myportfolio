import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Ransom } from '@/components/ui'

export default function NotFound() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col">
      <Navbar />

      <div className="flex flex-1 items-center justify-center px-6 pb-16 pt-28">
        <div className="max-w-2xl text-center">
          <div className="slab-wrap mx-auto mb-10 w-44 rotate-[4deg]">
            <div className="slab cut-b p-2">
              <div className="duotone relative aspect-square">
                <Image src="/sad-signs.jpg" alt="" fill sizes="176px" className="object-cover" style={{ objectPosition: '50% 10%' }} />
              </div>
            </div>
          </div>

          <h1 className="-rotate-[3deg] text-[clamp(2rem,1.2rem+4vw,4rem)]">
            <Ransom text="Wrong turn" />
          </h1>
          <p className="mt-8 text-lg font-semibold">This page doesn&rsquo;t exist. You&rsquo;ve wandered somewhere you shouldn&rsquo;t have.</p>
          <p className="mx-auto mt-4 max-w-md italic text-white/75">
            &ldquo;Sorrow has twelve faces, and every single one is looking for a way out.&rdquo;
          </p>

          <Link href="/" className="btn mt-10"><span>Back to the homepage</span></Link>
        </div>
      </div>
    </main>
  )
}
