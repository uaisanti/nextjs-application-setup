import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Instituto Impactus - Transformando Vidas através da Educação',
  description: 'O Instituto Impactus é uma organização sem fins lucrativos dedicada ao desenvolvimento de programas educacionais nas áreas de saúde, educação e juventude no Brasil.',
  keywords: 'instituto, impactus, educação, saúde, juventude, ONG, Brasil, transformação social',
  authors: [{ name: 'Instituto Impactus' }],
  openGraph: {
    title: 'Instituto Impactus - Transformando Vidas através da Educação',
    description: 'Organização sem fins lucrativos dedicada ao desenvolvimento de programas educacionais nas áreas de saúde, educação e juventude no Brasil.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
