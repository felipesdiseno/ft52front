"use client"

import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Calendar, ChevronRight, MapPin } from "lucide-react"
import CardContainer from '../components/ui/PageContent'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card"
import { useState } from 'react'


const upcomingEvents = [
  { id: 1, title: "Primer reunión", date: "2024-09-24", time: "10:00 AM", location: "Centro", imageUrl: "/placeholder.svg" },
  { id: 2, title: "Segunda reunión", date: "2024-10-02", time: "7:00 PM", location: "Sala de conferencias", imageUrl: "/placeholder.svg" },
  { id: 3, title: "Tercera reunión", date: "2024-10-10", time: "2:00 PM", location: "Plaza", imageUrl: "/placeholder.svg" },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <main className="flex-grow">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Próximos Eventos</h2>
          <div className="flex justify-center gap-6 overflow-x-auto">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="flex-shrink-0 ">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <time dateTime={event.date}>{new Date(event.date).toLocaleDateString()}</time> a las {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="mr-2 h-4 w-4" />
                        {event.location}
                      </p>
                    </div>
                    <div className="ml-4">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-row gap-x-4">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                    <Button variant="outline" className="w-fit">Ver detalles</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">Primer reunion</h4>
                          <p className="text-sm">
                            Este evento sera el aire libre, traer para compartir
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <Button variant="outline" className="w-fit">Consigue tu entrada</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              Ver todos los eventos
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explora nuestras ofertas</h2>
          <CardContainer />
        </div>
      </section>
    </main>
  )
}