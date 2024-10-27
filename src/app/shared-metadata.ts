export const openGraph = {
  openGraph: {
    title: 'Rodrigo Fontes | Desenvolvedor Front-End',
    description:
      'Rodrigo Fontes é um Desenvolvedor Front-End com 9 anos de experiência, atuando em mais de 50 projetos ao longo da carreira.',
    siteName: 'Rodrigo Fontes',
    url: '/',
    type: 'profile',
    firstName: 'Rodrigo',
    lastName: 'Fontes',
    username: 'Digo',
    gender: 'male',
    countryName: 'Brazil',
    locale: 'pt_BR',
    images: [
      {
        url: '1200x630.svg',
        secureUrl: '1200x630.svg',
        alt: '',
        type: 'image/svg+xml',
        width: 1200,
        height: 630,
      },
      {
        url: '600x315.svg',
        alt: '',
        type: 'image/svg+xml',
        width: 600,
        height: 315,
      },
    ],
  },
}

export const twitterCard = {
  twitter: {
    title: 'Rodrigo Fontes | Desenvolvedor Front-End',
    description:
      'Rodrigo Fontes é um Desenvolvedor Front-End com 9 anos de experiência, atuando em mais de 50 projetos ao longo da carreira.',
    card: 'summary_large_image',
    images: [
      {
        url: '1024x512.svg',
        alt: '',
        type: 'image/svg+xml',
        width: 1024,
        height: 512,
      },
    ],
  },
}

export const commom = {
  metadataBase: new URL('https://rodrigofontes.dev'),
  manifest: new URL('https://rodrigofontes.dev/manifest.json'),
  applicationName: 'Rodrigo Fontes Portfolio',
  authors: {
    name: 'Rodrigo Fontes',
    url: new URL('https://rodrigofontes.dev'),
  },
  creator: 'Rodrigo Fontes',
  publisher: 'Rodrigo Fontes',
}

export const robots = {
  robots: {
    follow: true,
    index: true,
    nocache: true,
  },
}
