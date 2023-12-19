import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='p-3 m-3 flex justify-center'>
      <Link href="/" className='border-solid border border-gray-500 rounded-md p-2 mr-3'>Upcoming Events</Link>
      <Link href="/favorites" className='border-solid border border-gray-500 rounded-md p-2'>Favorite Events</Link>
    </div>
  )
}

export default Navigation