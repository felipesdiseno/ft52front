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
      imageUrl:
        'https://imgs.search.brave.com/Bn9ESrWYvb4aKafewtoLAA75yNqFwRQvx3lQXzUC-Kg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zYW5kZXMuY29t/LmFyL3Jlc2l6ZXIv/djIvRkRJVTQ3QTZK/VkVOTE1MUjZXSlVF/RzJRN1EuanBnP3F1/YWxpdHk9NzUmc21h/cnQ9dHJ1ZSZhdXRo/PTQwMTM2YzQyNjU4/NDQ3MDMxMzVhNmJm/ZTBiZjNmYjZiNmIx/ZWYwMGVlZWNhZjM4/Njg4MWFhNDlmMTcz/ZDA3MWQmd2lkdGg9/OTgwJmhlaWdodD02/NDA',
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
    {
      id: 4,
      title: 'Tercera reunión',
      date: '2024-10-10',
      time: '2:00 PM',
      location: 'Plaza',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 5,
      title: 'Tercera reunión',
      date: '2024-10-10',
      time: '2:00 PM',
      location: 'Plaza',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 6,
      title: 'Tercera reunión',
      date: '2024-10-10',
      time: '2:00 PM',
      location: 'Plaza',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 7,
      title: 'Tercera reunión',
      date: '2024-10-10',
      time: '2:00 PM',
      location: 'Plaza',
      imageUrl: '/placeholder.svg',
    },
  ];
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
          <EventsList events={upcomingEvents} />
        </div>
      </div>
    </div>
  );
}
export default EventsPage;
