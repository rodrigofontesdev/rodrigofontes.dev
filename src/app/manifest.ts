/* eslint-disable camelcase */
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `Portfolio Pessoal do ${process.env.NEXT_PUBLIC_APP_NAME}`,
    short_name: process.env.NEXT_PUBLIC_APP_NAME,
    description: `Site oficial do Desenvolvedor Front-End ${process.env.NEXT_PUBLIC_APP_NAME}.`,
    scope: process.env.NEXT_PUBLIC_APP_URL,
    id: process.env.NEXT_PUBLIC_APP_URL,
    start_url: '/',
    background_color: '#000000',
    theme_color: '#000000',
    display: 'standalone',
    orientation: 'any',
    launch_handler: {
      client_mode: ['auto'],
    },
    icons: [
      {
        sizes: '256x256',
        src: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  }
}
