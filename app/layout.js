import './globals.css'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export const metadata = {
  title: 'Xavier Minnamons portfilio',
  description: 'Frontend Developer Portfolio to showcase skills and projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.className} h-screen relative `}>{children}</body>
    </html>
  )
}
