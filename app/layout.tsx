import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/unbounded'
import '@fontsource-variable/archivo/standard.css'
import '@fontsource-variable/archivo/standard-italic.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/jetbrains-mono/700.css'
import './globals.css'

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
  },
}

export const viewport: Viewport = {
  themeColor: '#1F4BD8',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="field" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
