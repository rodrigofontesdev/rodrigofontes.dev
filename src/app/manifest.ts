/* eslint-disable camelcase */
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portfolio Pessoal do Rodrigo Fontes',
    short_name: 'Rodrigo Fontes',
    description: 'Site oficial do Desenvolvedor Front-End Rodrigo Fontes.',
    scope: 'https://rodrigofontes.dev',
    id: 'https://rodrigofontes.dev',
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
