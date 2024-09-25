'use client';
import { ComboboxDemo } from '@/components/dropDownEvents/monthFilter';
import { SearchBar } from '@/components/dropDownEvents/searchBar';
import { ComboboxDemoYear } from '@/components/dropDownEvents/yearFilter';
import EventsList from '@/components/events/eventsList';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';

function EventsPage() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await fetch('http://localhost:3005/events');
    if (!response.ok) {
      throw new Error('Error fetching events');
    }
    const data = await response.json();
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', data);
    setEvents(data.events);
  };
  useEffect(() => {
    if (events.length === 0) {
      getEvents();
    }
    console.log('USE EFFECT EN HOME DE EVENTOS "/"', events);
  }),
    [events];

  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col mt-4 ">
        <h1 className="text-3xl mt-4 font-bold">
          Participa de nuestros eventos:
        </h1>
        <div className="flex flex-row gap-2  justify-start mt-4">
          <div className="flex flex-row gap-6 ">
            <ComboboxDemo />
            <ComboboxDemoYear />
            <SearchBar />
          </div>
        </div>
        <div className="mt-4 mb-6">
          <EventsList events={events} />
        </div>
      </div>
    </div>
  );
}
export default EventsPage;
