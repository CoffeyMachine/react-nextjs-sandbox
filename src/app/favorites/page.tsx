'use client'
// import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import EventListing from '../components/eventListing'
import Navigation from '../components/navigation'
import favoritesSlice from '@/lib/favoritesSlice'
import Link from 'next/link'

export default function Home() {
  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch();
  const { favorites } = state
  const { clearAllFavorites } = favoritesSlice.actions

  return (
    <div>
      <Navigation></Navigation>
      {favorites.favoriteEvents.map((event: any) => {
        return (
          <div>
            <EventListing event={event}/>
          </div>
        )
      })}
      <div className='p-3 m-3 flex justify-center'>
        {!favorites.favoriteEvents.length ? (
          <p>You haven't added any favorites yet. Go to the <Link className="underline underline-offset-2" href="/">Upcoming Events</Link> page and add some!</p>
        ) :
        (
          <button className="border-solid border border-gray-500 rounded-md p-2" onClick={() => dispatch(clearAllFavorites())}>
            Clear all favorites
          </button>
        )}
      </div>
    </div>
  )
}
