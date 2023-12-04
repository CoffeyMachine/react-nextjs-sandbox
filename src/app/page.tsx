'use client'
// import Image from 'next/image'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchAllEvents } from '../lib/eventsSlice'
import EventListing from './components/eventListing'


export default function Home() {
  const state = useAppSelector((state) => state)
  const events = state.events as any
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllEvents())
  }, [dispatch])

  return (
    events?.data?._embedded?.events.map((event: any) => {
      return (
        <div>
          <EventListing event={event}/>
        </div>
      )
    })
  )
}
