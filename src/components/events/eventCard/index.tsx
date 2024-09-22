import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MapPin } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Switch } from '@/components/ui/switch'

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  imageUrl: string
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
        <div className='flex justify-between items-center'>
          <CardTitle>{title}</CardTitle>

          <div className='flex items-center'>
            <span className='text-sm mr-2'>Destacar</span>
            <Switch
              id='highlight-event'
              className='text-blue-600'
              onCheckedChange={(checked) => {
                console.log(
                  checked ? 'Evento destacado' : 'Evento no destacado',
                )
              }}
            />
          </div>
        </div>
        <CardDescription>
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time> a
          las {time}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='justify-between items-center flex flex-col'>
          <div>
            <p className='flex items-center text-muted-foreground mb-4'>
              <MapPin className='mr-2 h-4 w-4' />
              {location}
            </p>
          </div>
          <div className='ml-4 justify-center'>
            <Image
              src={imageUrl}
              alt={title}
              width={180}
              height={180}
              className='rounded-md object-cover mx-auto'
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex flex-row gap-x-4'>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button className='text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white border border-blue-500'>
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
        <Button className='bg-blue-500 hover:bg-blue-600'>
          Consigue tu entrada
        </Button>
      </CardFooter>
    </Card>
  )
}
export default EventCard
