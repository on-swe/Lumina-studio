import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumina Studio',
  description: 'Created with Abdelrahman Elrayes',
  generator: 'Abdelrahman Elrayes',
  icons:{
    icon:'/logo/logo.png'
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
