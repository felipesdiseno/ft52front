'use client';
import React from 'react';
import EventCard from '../eventCard';

type EventsListProps = {
  events: {
    title: string;
    id: number;
    date: string;
    time: string;
    location: string;
    imageUrl: string;
  }[];
};

function EventsList({ events }: EventsListProps) {
  if (!Array.isArray(events)) {
    return <div>No se encontraron eventos.</div>; // Mensaje si no es un array
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
  );
}

export default EventsList;
