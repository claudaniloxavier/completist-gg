import type { Metadata } from 'next'

// PROVIDERS
import Providers from '@/providers'

// FONTS
import { Inter, Archivo } from 'next/font/google'

// STYLES
import './globals.css'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

const archivo = Archivo({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={(inter.variable, archivo.variable)}>
        <Providers attribute="class" defaultTheme="dark">
          {children}
        </Providers>
      </body>
    </html>
  )
}
