import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Handjet } from 'next/font/google'

// const inter = Handjet({ subsets: ['latin'] })

export const metadata = {
  title: 'first line in react',
  description: 'this is react and next.js',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        {/* <Navbar/> */}
        <main className='text-[50px] h-[420px]'>
        {children}
        </main>
        {/* <Footer/> */}
        
        </body>
    </html>
  )
}
