import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jose Algara | Coaching de carrera y transformación con IA',
  description: 'Coaching para profesionales y empresas que quieren crecer en la era de la IA. Más de 20 años liderando transformación digital en Amazon, Maersk, Flexport y Nordstrom.',
  keywords: 'coaching de carrera, coaching ejecutivo, liderazgo, inteligencia artificial, transformación digital, adopción de IA, crecimiento profesional, career coaching',
  authors: [{ name: 'Jose Algara' }],
  creator: 'Jose Algara',
  publisher: 'Jose Algara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://josealgara.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jose Algara | Coaching de carrera y transformación con IA',
    description: 'Coaching para profesionales y empresas que quieren crecer en la era de la IA. Más de 20 años liderando transformación digital en Amazon, Maersk, Flexport y Nordstrom.',
    url: 'https://josealgara.com',
    siteName: 'Jose Algara',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jose Algara - Coaching de carrera y transformación con IA',
      },
    ],
    locale: 'es_419',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Algara | Coaching de carrera y transformación con IA',
    description: 'Coaching para profesionales y empresas que quieren crecer en la era de la IA. Más de 20 años liderando transformación digital en Amazon, Maersk, Flexport y Nordstrom.',
    images: ['/og-image.jpg'],
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
  verification: {
    // Add your verification codes here after setting up
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jose Algara',
    url: 'https://josealgara.com',
    image: 'https://josealgara.com/IMG_2031.JPG',
    sameAs: [
      'https://www.linkedin.com/in/jose-algara/',
    ],
    jobTitle: 'Career Coach & AI Transformation Advisor',
    worksFor: {
      '@type': 'Organization',
      name: 'Jose Algara Coaching',
    },
    description: 'Coaching para profesionales y empresas que quieren crecer en la era de la IA. Más de 20 años liderando transformación digital en Amazon, Maersk, Flexport y Nordstrom.',
    email: 'jose.algara@gmail.com',
    telephone: '+1-206-245-6474',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Career Coaching',
      'Executive Coaching',
      'AI Adoption',
      'AI Strategy',
      'Supply Chain Management',
      'Digital Transformation',
      'Operations Leadership',
      'Logistics',
      'Process Improvement',
    ],
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Amazon',
      },
      {
        '@type': 'Organization',
        name: 'Nordstrom',
      },
      {
        '@type': 'Organization',
        name: 'A.P. Moeller Maersk',
      },
      {
        '@type': 'Organization',
        name: 'Flexport',
      },
    ],
  }

  return (
    <html lang="es">
      <head>
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Google Analytics - Replace G-XXXXXXXXXX with your actual GA4 ID */}
        {/* Uncomment when you have your Google Analytics ID
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
