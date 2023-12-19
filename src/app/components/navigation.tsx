import { useAppSelector } from '@/lib/hooks'
import Link from 'next/link'

const Navigation = () => {
  const state = useAppSelector((state) => state)
  const { favorites } = state

  return (
    <div className='p-3 m-3 flex justify-center'>
      <Link href="/" className='border-solid border border-gray-500 rounded-md p-2 mr-3'>Upcoming Events</Link>
      <Link href="/favorites" className='border-solid border border-gray-500 rounded-md p-2'>
        Favorite Events
        {favorites.favoriteEvents.length? 
          <span className='m-3 px-3 py-1 rounded-full bg-sky-500'>{favorites.favoriteEvents.length}</span>
         : ''}
      </Link>
    </div>
  )
}

export default Navigation