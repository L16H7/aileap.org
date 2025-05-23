import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Leap',
  description: 'AGI Research Lab'
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
