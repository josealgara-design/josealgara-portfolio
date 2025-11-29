import './globals.css'

export const metadata = {
  title: 'Jose Algara | Supply Chain & Inventory Management Expert | AI-Powered Optimization',
  description: 'Transform your supply chain with Jose Algara - 20+ years optimizing operations for Fortune 500 companies. Expert in AI-powered inventory management, logistics optimization, and executive coaching.',
  keywords: ['supply chain optimization', 'inventory management', 'AI supply chain', 'logistics consultant', 'operations excellence', 'supply chain transformation', 'executive coaching', 'demand forecasting'],
  authors: [{ name: 'Jose Algara' }],
  creator: 'Jose Algara',
  publisher: 'Jose Algara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://josealgara.com',
    title: 'Jose Algara | Supply Chain & Inventory Management Expert',
    description: 'Transform operations into value engines. 20+ years optimizing supply chain and inventory management with AI-powered solutions.',
    siteName: 'Jose Algara',
    images: [
      {
        url: 'https://josealgara.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jose Algara - Supply Chain & Inventory Management Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Algara | Supply Chain Expert',
    description: 'Transform operations into value engines with AI-powered supply chain solutions.',
    images: ['https://josealgara.com/twitter-image.jpg'],
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
  alternates: {
    canonical: 'https://josealgara.com',
  },
  verification: {
    google: <meta name="google-site-verification" content="GlrgVXsy1torsm-x7tFy0pqkPZuVJIJEMcecx1vr3Hc" />, // Replace with actual code from Google Search Console
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jose Algara",
              "jobTitle": "VP Supply Chain & Inventory Management",
              "description": "Supply Chain and Inventory Management expert specializing in AI-powered optimization, operations transformation, and executive coaching",
              "url": "https://josealgara.com",
              "sameAs": [
                "https://www.linkedin.com/in/jose-algara/"
              ],
              "knowsAbout": [
                "Supply Chain Management",
                "Inventory Management",
                "AI and Machine Learning",
                "Operations Optimization",
                "Executive Coaching",
                "Logistics",
                "E-commerce"
              ],
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "IE Business School"
                },
                {
                  "@type": "Organization",
                  "name": "Tecnológico de Monterrey"
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}




