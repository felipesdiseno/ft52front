'use client';

import EventsList from '../components/events/eventsList';
import FeaturedEventCard from '../components/events/featuredEventCard';
import { Button } from '../components/ui/button';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

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
const featuredEvents = [
  {
    title: '50 años',
    description:
      'Cumple 50 años Maranatha, el movimiento peregrino que marcó a muchas generaciones de mendocinos',

    imgSrc:
      'https://imgs.search.brave.com/Bn9ESrWYvb4aKafewtoLAA75yNqFwRQvx3lQXzUC-Kg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zYW5kZXMuY29t/LmFyL3Jlc2l6ZXIv/djIvRkRJVTQ3QTZK/VkVOTE1MUjZXSlVF/RzJRN1EuanBnP3F1/YWxpdHk9NzUmc21h/cnQ9dHJ1ZSZhdXRo/PTQwMTM2YzQyNjU4/NDQ3MDMxMzVhNmJm/ZTBiZjNmYjZiNmIx/ZWYwMGVlZWNhZjM4/Njg4MWFhNDlmMTcz/ZDA3MWQmd2lkdGg9/OTgwJmhlaWdodD02/NDA',
  },
  {
    title: 'To The Beach',
    description: 'Plan your next beach trip with these fabulous destinations',

    imgSrc:
      'https://imgs.search.brave.com/dyfOQ7_ZbLvAx4voghAK5dDrv0PWPne7jMiCyoROgKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zYW5kZXMuY29t/LmFyL3Jlc2l6ZXIv/djIvWkZUQUk2VzUz/VkNTNUI3N05BNVJC/UlpCSVkuanBnP2F1/dGg9ZjA2NjVhM2Uw/OGM1MzcxNThhZDI2/MDU2MjQ0OWMyNDI3/YjE5NTVhNmU3OGZk/NGNjMjQ0YTM2Nzlm/MjJiZjkyYyZ3aWR0/aD0xMjgwJmhlaWdo/dD03MjA',
  },
  {
    title: 'Desert Destinations',
    description: "It's the desert you've always dreamed of",

    imgSrc:
      'https://imgs.search.brave.com/Bn9ESrWYvb4aKafewtoLAA75yNqFwRQvx3lQXzUC-Kg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zYW5kZXMuY29t/LmFyL3Jlc2l6ZXIv/djIvRkRJVTQ3QTZK/VkVOTE1MUjZXSlVF/RzJRN1EuanBnP3F1/YWxpdHk9NzUmc21h/cnQ9dHJ1ZSZhdXRo/PTQwMTM2YzQyNjU4/NDQ3MDMxMzVhNmJm/ZTBiZjNmYjZiNmIx/ZWYwMGVlZWNhZjM4/Njg4MWFhNDlmMTcz/ZDA3MWQmd2lkdGg9/OTgwJmhlaWdodD02/NDA',
  },
  {
    title: 'Explore The Galaxy',
    description:
      'Seriously, straight up, just blast off into outer space today',

    imgSrc:
      'https://imgs.search.brave.com/dyfOQ7_ZbLvAx4voghAK5dDrv0PWPne7jMiCyoROgKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zYW5kZXMuY29t/LmFyL3Jlc2l6ZXIv/djIvWkZUQUk2VzUz/VkNTNUI3N05BNVJC/UlpCSVkuanBnP2F1/dGg9ZjA2NjVhM2Uw/OGM1MzcxNThhZDI2/MDU2MjQ0OWMyNDI3/YjE5NTVhNmU3OGZk/NGNjMjQ0YTM2Nzlm/MjJiZjkyYyZ3aWR0/aD0xMjgwJmhlaWdo/dD03MjA',
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className='flex-grow'>
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Próximos Eventos
          </h2>
          <div className='flex justify-center gap-6 flex-row flex-wrap p-4'>
            <div className=''>
              <EventsList events={upcomingEvents} />
            </div>
          </div>
          <div className='text-center mt-8'>
            <Button variant='outline'>
              Ver todos los eventos
              <Calendar className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </div>
      </section>
      <section className='py-20 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Eventos destacados
          </h2>
          <div className='flex content-center flex-col lg:flex-row gap-4 w-full flex-wrap max-w-[760px] mx-auto justify-between'>
            {featuredEvents.map((event, i) => (
              <FeaturedEventCard
                imgSrc={event.imgSrc}
                title={event.title}
                description={event.description}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
