'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';


const aportes = [
  {
    aporte: 'Donación',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    aporte: 'Donación',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    aporte: 'Donación',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
];

const upcomingEvents = [
  { id: 1, name: 'Evento 1', date: '2023-07-15' },
  { id: 2, name: 'Evento 2', date: '2023-07-22' },
  { id: 3, name: 'Evento 3', date: '2023-07-29' },
];

export default function UserDashboard() {
  const [showDonations, setShowDonations] = useState(false);
  const { userSession } = useAuth()
  

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardHeader className="bg-gradient-to-r from-blue-400 to-green-400 flex justify-between items-center">
            <CardTitle className="text-3xl font-bold text-white justify-center">
              {userSession?.name}
            </CardTitle>
            <Avatar className="hover:cursor-pointer">
              <AvatarImage src={userSession?.image} alt="User Image" />
              <AvatarFallback>{userSession?.image}</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Information Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Información del Usuario</CardTitle>
                </CardHeader>
                <CardContent >
                 
                  <p>
                    <strong>Email:</strong> {userSession?.email}
                  </p>
                  <p>
                    <strong>Dirección:</strong> {userSession?.address}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {userSession?.phone}
                  </p>
                </CardContent>
              </Card>

              {/* Upcoming Events Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Próximos Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {upcomingEvents.map((event) => (
                      <li
                        key={event.id}
                        className="flex justify-between items-center bg-white p-3 rounded shadow-sm"
                      >
                        <span>{event.name}</span>
                        <span className="text-sm text-gray-500">
                          {event.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Donations History Section */}
            <div className="mt-8">
              <Button
                onClick={() => setShowDonations(!showDonations)}
                className="w-full justify-between"
                variant="outline"
              >
                <span>Historial de Donaciones</span>
                {showDonations ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </Button>
              {showDonations && (
                <Card className="mt-4">
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Aporte</TableHead>
                          <TableHead>Estado</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>Método de Pago</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {aportes.map((aporte, index) => (
                          <TableRow key={index}>
                            <TableCell>{aporte.aporte}</TableCell>
                            <TableCell>{aporte.paymentStatus}</TableCell>
                            <TableCell>{aporte.totalAmount}</TableCell>
                            <TableCell>{aporte.paymentMethod}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}