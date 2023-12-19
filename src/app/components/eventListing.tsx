import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import favoritesSlice from '@/lib/favoritesSlice'

interface eventListingProps {
  event: any
}

const EventListing = (props: eventListingProps) => {
  const { event } = props
  const thumbnail = event.images[2]
  const eventDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short'
  }).format(new Date(event.dates.start.dateTime))

  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch();
  const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
  const { favorites } = state

  return (
    <div className="border-solid border border-gray-500 rounded-md mb-6 p-2">
      <Image 
        src={thumbnail.url}
        alt={""}
        width={16 * 8} //TODO: guess consistent image size from inconsistent API data structure in the reducer
        height={9 * 8}
      ></Image>
      <h2>{event.name}</h2>
      <p>{eventDate}</p>
      <p>{event._embedded.venues[0].name}</p>
      {!favorites.favoriteEvents.find((favoriteEvent) => favoriteEvent.id == event.id) && (
        <button className="border-solid border border-gray-500 rounded-md p-2" onClick={() => dispatch(addToFavorites(event))}>
          Add to favorites
        </button>
      )}
      {favorites.favoriteEvents.find((favoriteEvent) => favoriteEvent.id == event.id) && (
        <button className="border-solid border border-gray-500 rounded-md p-2" onClick={() => dispatch(removeFromFavorites(event))}>
          Remove from favorites
        </button>
      )}
    </div>
  )
}

export default EventListing