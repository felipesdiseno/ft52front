import { ComboboxDemo } from '@/components/dropDownEvents/monthFilter';
import { SearchBar } from '@/components/dropDownEvents/searchBar';
import { ComboboxDemoYear } from '@/components/dropDownEvents/yearFilter';
import EventsList from '@/components/events/eventsList';

function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Primer reunión',
      date: '2024-09-24',
      time: '10:00 AM',
      location: 'Centro',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Segunda reunión',
      date: '2024-10-02',
      time: '7:00 PM',
      location: 'Sala de conferencias',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Tercera reunión',
      date: '2024-10-10',
      time: '2:00 PM',
      location: 'Plaza',
      imageUrl: '/placeholder.svg',
    },
  ];
  return (
    <div className='w-full'>
      <div className='container mx-auto flex flex-col '>
        <h1 className='text-3xl mt-4'>Participa de nuestros eventos:</h1>
        <div className='flex flex-row gap-2  justify-start mt-4'>
          <ComboboxDemo />
          <ComboboxDemoYear />
          <SearchBar />
          <EventsList events={upcomingEvents} />
        </div>
      </div>
    </div>
  );
}
export default EventsPage;
