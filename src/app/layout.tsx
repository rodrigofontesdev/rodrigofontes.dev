import { commom, openGraph, robots, twitterCard } from './shared-metadata'
import type { Metadata, Viewport } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Desenvolvedor Front-End`,
  description: `${process.env.NEXT_PUBLIC_APP_NAME} é um Desenvolvedor Front-End com 9 anos de experiência, atuando em mais de 50 projetos ao longo da carreira.`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-black">{children}</body>
    </html>
  )
}
