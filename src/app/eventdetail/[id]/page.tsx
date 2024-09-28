// Asegúrate de que la ruta sea correcta
import EventCardDetail from '@/components/eventDetail/indext';
import getEventById from '@/utils/eventsdetail';

interface Event {
  id: string;
  highlight: boolean;
  createDate: Date;
  status: string;
  title: string;
  eventDate: Date;
  eventLocation: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
}

const EventDetailPage = async ({ params }: { params: { id: string } }) => {
  try {
    const event: Event | null = await getEventById(params.id); // Cambiar a Event

    if (!event) {
      return <div>Evento no disponible</div>;
    }
    return <EventCardDetail {...event} />; // Pasar directamente las propiedades de event

  } catch (error) {
    console.error("Error", error);
    return <div>Ha ocurrido un error al cargar el evento</div>;
  }
};

export default EventDetailPage;
