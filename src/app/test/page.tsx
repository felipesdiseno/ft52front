"use client"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Calendar, ChevronRight, MapPin } from "lucide-react"
import CardContainer from "@/src/components/ui/PageContent"
import { SelectScrollable } from "@/src/components/ui/select2"
import { SelectScrollable2 } from "@/src/components/ui/select3"

const upcomingEvents = [
  { id: 1, title: "Primer reunión", date: "2024-09-24", time: "10:00 AM", location: "Centro" },
  { id: 2, title: "Segunda reunión", date: "2024-10-02", time: "7:00 PM", location: "Sala de conferencias" },
  { id: 3, title: "Tercera reunión", date: "2024-10-10", time: "2:00 PM", location: "Plaza" },
]

export default function HomePage() {
  return (
    <main className="flex-grow">
      <section className="py-20">
        <div className="container mx-auto px-4">
        
          <h2 className="text-3xl font-bold mb-8 text-center">Próximos Eventos</h2>
          <div className="flex justify-center gap-6 overflow-x-auto">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="flex-shrink-0 w-[300px]">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <time dateTime={event.date}>{new Date(event.date).toLocaleDateString()}</time> a las {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Ver más</Button>
                  <Button variant="outline">Consigue tu entrada</Button>
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
      
        <SelectScrollable2 />
      </section>
    </main>
  )
}
