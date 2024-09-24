'use client';
import { ComboboxDemo } from '@/components/dropDownEvents/monthFilter';
import { SearchBar } from '@/components/dropDownEvents/searchBar';
import { ComboboxDemoYear } from '@/components/dropDownEvents/yearFilter';
import EventsList from '@/components/events/eventsList';
import { useFetchEvents } from '@/components/inputEventAdministrator/useFetchEvents';
function EventsPage() {
  const { events, loading, error } = useFetchEvents();
  if (loading) {
    return <div>Cargando eventos...</div>;
  }

  if (error) {
    return <div>Error al cargar los eventos: {error}</div>;
  }
  const transformedEvents = events.map((event) => ({
    title: event.title,
    id: event.id,

    time: '00:00', // Valor por defecto para time

    imageUrl: event.images.length > 0 ? event.images[0] : '', // Verifica que haya imágenes
  }));
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
          <EventsList events={transformedEvents} />
        </div>
      </div>
    </div>
  );
}
export default EventsPage;
