import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Form from '@/components/Form'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="main">
      <Navbar/>
      <Form/>
    </div>
  )
}
