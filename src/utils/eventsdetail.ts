interface Event {
  id: string;
  highlight: boolean;
  createDate: Date;
  status: string;
  title: string;
  eventDate: Date;
  eventLocation: string;
  price: number;
  stock: number;
  images: string[];
  description: string;
}

interface EventResponse {
  events: Event[]; 
  totalElements: number;
  page: number;
  limit: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
}

export async function getEvents(): Promise<Event[]> {
  const port = process.env.NEXT_PUBLIC_APP_API_PORT || 3003;

  try {
    const res = await fetch(`http://localhost:${port}/events`, {
      next: { revalidate: 1200 },
    });
    if (!res.ok) {
      throw new Error(
        `Error al obtener los eventos: ${res.status} ${res.statusText}}`,
      );
    }
    const data: EventResponse = await res.json();
    return data.events; // Retorna solo los eventos
  } catch (error) {
    console.error('Error al encontrar eventos:', error);
    return [];
  }
}

export default async function getEventById(
  id: string,
): Promise<Event | null> {
  try {
    const events = await getEvents();

    const event = events.find((event) => event.id === id);

    if (!event) {
      throw new Error('Evento no encontrado');
    }

    return event;
  } catch (error) {
    console.error('Error al obtener el evento por ID:', error);
    return null;
  }
}
