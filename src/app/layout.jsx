import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/Searchbar';
import { Providers } from './redux/providers';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
      <Providers>
        <Header/>
        <Navbar/>
        <SearchBar/>
          {children}
          </Providers>
        </body>
    </html>
  )
}
