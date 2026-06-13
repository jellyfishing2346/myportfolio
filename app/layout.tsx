import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://myportfolio-xi-liart-28.vercel.app'),
  title: 'Faizan Khan',
  description: 'Software Engineer & Data Scientist specializing in FinTech: Credit Risk Modeling, Fraud Detection, and Quantitative Finance.',
  icons: {
    icon: '/avatar.jpg',
    apple: '/avatar.jpg',
  },
  openGraph: {
    title: 'Faizan Khan',
    description: 'Software Engineer & Data Scientist specializing in FinTech: Credit Risk Modeling, Fraud Detection, and Quantitative Finance.',
    images: [{ url: '/avatar.jpg' }],
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
