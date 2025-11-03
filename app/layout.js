import './globals.css'

export const metadata = {
  title: 'Jose Algara - Supply Chain Transformation | Executive Coaching',
  description: 'VP Supply Chain leader with 15+ years building transformative technology solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
