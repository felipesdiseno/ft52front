import React from 'react'
import EventCard from '../eventCard'

type EventsListProps = {
  events: {
    title: string
    id: number
    date: string
    time: string
    location: string
    imageUrl: string
  }[]
}

function EventsList({ events }: EventsListProps) {
  return (
    <div className=''>
      <div className='flex flex-row gap-4'>
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            imageUrl={event.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default EventsList
