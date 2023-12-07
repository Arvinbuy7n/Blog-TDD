import Second from '@/components/Second'
import Trend from '@/components/Trend'
import Blog from '@/components/Blog'



export default function Home(articles) {
  return (
    <div className='w-full h-full bg- m-auto max-w-[1600px]'>
      <Second />
      <Trend />
      <Blog />
    </div>
  )
};