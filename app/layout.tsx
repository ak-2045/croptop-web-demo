import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CropTop (demo)',
  description: 'Crop Reccommendation using Machine Learning',
  generator: 'Akmal',
  icons: {
    icon: 'https://img.pikbest.com/png-images/20241029/an-agriculture-logo-sun-and-crops-icon_11024322.png!sw800',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
