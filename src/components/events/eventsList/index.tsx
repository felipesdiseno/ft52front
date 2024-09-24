'use client';
import React from 'react';
import EventCard from '../eventCard';

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
  if (!Array.isArray(events)) {
    return <div>No se encontraron eventos.</div>; // Mensaje si no es un array
  }

  return (

    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
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

  )
}

export default EventsList;
