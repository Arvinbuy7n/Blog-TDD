import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Second } from '../components/Second'
import { Trend } from '../components/Trend'
import Ablog from '@/components/Ablog'




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
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import { Second } from '../components/Second'
// import { Trend } from '../components/Trend'
// import Ablog from '@/components/Ablog'





// const inter = Inter({ subsets: ['latin'] })


// export default function Home(articles) {
//     return (
//         <div className='w-full h-full bg-white m-auto max-w-[1600px]'>
//             <Second />
//             <Trend />
//             <Ablog />
//         </div>
//     )
// }