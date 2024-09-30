'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';

import getEventById from '@/utils/eventsdetail'; // Asegúrate de que esta función esté bien definida.
import { useRouter } from 'next/navigation';

interface EventCardProps {
  id: string;
  key: string;
  highlight: boolean;
  createDate: Date;
  status: string;
  title: string;
  eventDate: Date;
  eventLocation: string;
  price: number;
  stock: number;
  images: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  key,
  highlight,
  createDate,
  status,
  title,
  eventDate,
  eventLocation,
  price,
  stock,
  images,
}) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/eventdetail/${id}`);
  };

  return (
    <Card className="flex-shrink-0 shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center border rounded-full p-1">
            <span className="text-sm mr-2 text-gray-400">Destacar</span>
            <Switch
              id="highlight-event"
              className="text-blue-600 bg-blue-400"
              onCheckedChange={(checked) => {
                console.log(
                  checked ? 'Evento destacado' : 'Evento no destacado',
                );
              }}
            />
          </div>
        </div>
        <CardDescription>
          <time>{new Date(eventDate).toLocaleDateString()}</time>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="justify-between items-center flex flex-col">
          <div>
            <p className="flex items-center text-muted-foreground mb-4">
              <MapPin className="mr-2 h-4 w-4" />
              {eventLocation}
            </p>
          </div>
          <div
            className="ml-4 flex justify-center"
            style={{ height: '180px', width: '180px' }}
          >
            {images ? (
              <Image
                src={images}
                alt={title}
                width={180}
                height={180}
                className="rounded-md object-cover mx-auto"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-x-4 items-center justify-center">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              className="text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white border border-blue-500 transition-colors duration-300"
              onClick={handleViewDetails}
            >
              Ver detalles
            </Button>
          </HoverCardTrigger>
        </HoverCard>
        <Button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
          Consigue tu entrada
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
