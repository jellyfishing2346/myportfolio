import type { Metadata } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import './globals.css'

const sans = Schibsted_Grotesk({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://myportfolio-xi-liart-28.vercel.app'),
  title: 'Faizan Khan',
  description: 'Faizan Khan is a CS student at Brooklyn College building fraud detection, credit risk, and trading research projects.',
  icons: {
    icon: '/avatar.jpg',
    apple: '/avatar.jpg',
  },
  openGraph: {
    title: 'Faizan Khan',
    description: 'Faizan Khan is a CS student at Brooklyn College building fraud detection, credit risk, and trading research projects.',
    images: [{ url: '/avatar.jpg' }],
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
