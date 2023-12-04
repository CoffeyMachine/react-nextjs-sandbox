import Image from 'next/image'

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
    </div>
  )
}

export default EventListing