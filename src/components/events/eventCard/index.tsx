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

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  imageUrl,
}) => {
  return (
    <Card className='flex-shrink-0'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time> a
          las {time}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between items-start flex-col border'>
          <div>
            <p className='flex items-center text-muted-foreground mb-4'>
              <MapPin className='mr-2 h-4 w-4' />
              {location}
            </p>
          </div>
          <div className='ml-4'>
            <Image
              src={imageUrl}
              alt={title}
              width={80}
              height={80}
              className='rounded-md object-cover'
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex flex-row gap-x-4'>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant='outline' className='w-fit'>
              Ver detalles
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex justify-between space-x-4'>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>{title}</h4>
                <p className='text-sm'>
                  Este evento sera al aire libre, traer para compartir
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <Button variant='outline' className='w-fit'>
          Consigue tu entrada
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
