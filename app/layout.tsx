import Navbar from './component/Navbar'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My App',
    description: 'Buatanku sendiri dong',
  }

export default function RootLayout({children,}:{children:React.ReactNode}) {
  return (
    <html lang='en'>
        <body>
          <Navbar/>
          {children}
        </body>
    </html>
  )
}
