import { Header } from '@/components/Header'
import { TopBar } from '@/components/TopBar'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans as notoSans } from 'next/font/google'
import { commom, openGraph, robots, twitterCard } from './shared-metadata'

import './globals.css'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Desenvolvedor Front-End`,
  description: `${process.env.NEXT_PUBLIC_APP_NAME} é um Desenvolvedor Front-End com 9 anos de
  experiência, atuando em mais de 50 projetos ao longo da carreira.`,
  alternates: {
    canonical: '/',
  },
  ...commom,
  ...openGraph,
  ...twitterCard,
  ...robots,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  themeColor: 'black',
  colorScheme: 'dark',
}

const primaryFont = notoSans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-noto-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${primaryFont.variable} bg-black text-white antialiased scroll-smooth`}>
        <Header />

        <main className="ml-[12.5rem]">
          <TopBar />

          {children}
        </main>
      </body>
    </html>
  )
}
