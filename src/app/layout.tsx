import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

const noto_sans = Noto_Sans({ weight: "400", subsets: ["cyrillic"] })

export const metadata: Metadata = {
  title: 'Dataxpertise | Everything About Data',
  description: 'Dataxpertise, Everything about data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>{children}</body>
    </html>
  )
}
