import React from 'react'
import EventCard from '../eventCard'

export type EventsListProps = {
  events: {
    id: string
    highlight: boolean
    createDate: Date
    status: string
    title: string
    eventDate: Date
    eventLocation: string
    price: number
    stock: number
    image: string
  }[]
}

function EventsList({ events }: EventsListProps) {
  return (
    <div className=''>
      <div className='flex flex-row gap-4'>
        {events.map((event) => (
          <EventCard
            key={event?.id}
            highlight={event.highlight}
            createDate={event.createDate}
            status={event.status}
            title={event.title}
            eventDate={event.eventDate}
            eventLocation={event.eventLocation}
            price={event.price}
            stock={event.stock}
            image={event.image}
          />
        ))}
      </div>
    </div>
  )
}

export default EventsList
