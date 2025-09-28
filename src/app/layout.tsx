import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'KamSys CoWorksz - Premium Coworking Spaces',
    template: '%s | KamSys CoWorksz'
  },
  description: 'Premium coworking spaces designed for productivity and collaboration. Find the perfect workspace for your business needs.',
  keywords: ['coworking', 'workspace', 'office space', 'business', 'productivity', 'collaboration'],
  authors: [{ name: 'KamSys CoWorksz' }],
  creator: 'KamSys CoWorksz',
  metadataBase: new URL('https://kamsys-coworksz.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kamsys-coworksz.vercel.app',
    title: 'KamSys CoWorksz - Premium Coworking Spaces',
    description: 'Premium coworking spaces designed for productivity and collaboration. Find the perfect workspace for your business needs.',
    siteName: 'KamSys CoWorksz',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'KamSys CoWorksz - Premium Coworking Spaces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KamSys CoWorksz - Premium Coworking Spaces',
    description: 'Premium coworking spaces designed for productivity and collaboration. Find the perfect workspace for your business needs.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
