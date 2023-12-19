'use client'
// import Image from 'next/image'
import { useAppSelector } from '@/lib/hooks'
import EventListing from '../components/eventListing'
import Navigation from '../components/navigation'


export default function Home() {
  const state = useAppSelector((state) => state)
  const { favorites } = state

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
    </div>
  )
}
