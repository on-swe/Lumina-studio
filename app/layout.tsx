import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raqeem - رَقيم ',
  description: 'Created with Raqeem - رَقيم ',
  generator: 'Elrayes',
  icons:{
    icon:'/logo/profile.png'
  }
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
