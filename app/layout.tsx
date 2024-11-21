import './globals.css'
import { Bangers, Comic_Neue } from 'next/font/google'

const bangers = Bangers({ subsets: ['latin'], weight: '400', variable: '--font-bangers' })
const comicNeue = Comic_Neue({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-comic' })

export const metadata = {
  title: 'Mad Guy Token',
  description: 'The craziest meme in crypto!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bangers.variable} ${comicNeue.variable}`}>
      <body>{children}</body>
    </html>
  )
}

