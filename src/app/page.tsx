'use client'
// import Image from 'next/image'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchAllEvents } from '../lib/eventsSlice'
import EventListing from './components/eventListing'
import Navigation from './components/navigation'


export default function Home() {
  const state = useAppSelector((state) => state)
  const events = state.events as any
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllEvents())
  }, [dispatch])

  return (
    <div>
      <Navigation></Navigation>
      {events?.data?._embedded?.events.map((event: any) => {
        return (
          <div>
            <EventListing event={event}/>
          </div>
        )
      })
    }
    </div>
  )
}
