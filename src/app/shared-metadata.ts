export const commom = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/manifest.json`,
  applicationName: `${process.env.NEXT_PUBLIC_APP_NAME} Portfolio`,
  authors: {
    name: process.env.NEXT_PUBLIC_APP_NAME,
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
  creator: process.env.NEXT_PUBLIC_APP_NAME,
  publisher: process.env.NEXT_PUBLIC_APP_NAME,
}

export const openGraph = {
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} | Desenvolvedor Front-End`,
    description: `${process.env.NEXT_PUBLIC_APP_NAME} é um Desenvolvedor Front-End com 9 anos de experiência, atuando em mais de 50 projetos ao longo da carreira.`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
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
    title: `${process.env.NEXT_PUBLIC_APP_NAME} | Desenvolvedor Front-End`,
    description: `${process.env.NEXT_PUBLIC_APP_NAME} é um Desenvolvedor Front-End com 9 anos de experiência, atuando em mais de 50 projetos ao longo da carreira.`,
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

export const robots = {
  robots: {
    follow: true,
    index: true,
    nocache: true,
  },
}
