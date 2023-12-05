import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from './component/Header'
import { Second } from './component/Second'
import { Trend } from './component/Trend'
import Ablog from './component/Ablog'
import { Footer } from './component/Footer'
import { Description } from './Contact'

const inter = Inter({ subsets: ['latin'] })


export default function Home(articles) {
  return (
    <div className='w-full h-full bg-white m-auto max-w-[1600px]'>
      <Second />
      <Trend />
      <Ablog />
    </div>
  )
}