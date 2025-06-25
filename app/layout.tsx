import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Leap',
  description: 'AI Research Lab'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
