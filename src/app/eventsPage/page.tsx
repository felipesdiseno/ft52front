'use client';
import { ComboboxDemo } from '@/components/dropDownEvents/monthFilter';

import { ComboboxDemoYear } from '@/components/dropDownEvents/yearFilter';
import EventsList from '@/components/events/eventsList';
// import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const getEvents = async () => {
    const response = await fetch('http://localhost:3005/events');
    if (!response.ok) {
      throw new Error('Error fetching events');
    }
    const data = await response.json();
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', data);
    setEvents(data.events);
    setFilteredEvents(data.events);
  };
  useEffect(() => {
    if (events.length === 0) {
      getEvents();
    }
    console.log('USE EFFECT EN HOME DE EVENTOS "/"', events);
  }),
    [events];
  // Función para aplicar los filtros

  const handleSearch = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setSearch(value);
    if (value.length > 1) {
      const filtered = events.filter((event) =>
        event.title.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events); // Reiniciar a todos los eventos si la búsqueda está vacía
    }
  };
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
            <div className="flex w-auto max-w-sm items-center space-x-2">
              <Input
                type="text"
                placeholder=""
                value={search}
                onChange={handleSearch}
              />
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                Buscar
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-6">
          <EventsList events={filteredEvents} />
        </div>
      </div>
    </div>
  );
}
export default EventsPage;
