import { MercadoPagoConfig, Preference } from 'mercadopago';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HeartIcon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const client = new MercadoPagoConfig({
  accessToken:
    'APP_USR-3070431824896779-092618-b54618ee9085c599b72dfc57e22210f7-151488918',
});

export default function Home() {
  // const { token, userSession } = useAuth();
  async function donate(formData: FormData) {
    'use server';

    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: 'donacion',
            title: formData.get('message') as string,
            quantity: 1,
            unit_price: Number(formData.get('amount')),
          },
        ],
      },
    });

    const donationData = {
      amount: Number(formData.get('amount')),
      message: formData.get('message') as string,
      // creator: userSession?.creatorId,
    };

    await fetch('http://localhost:3003/donations/savedonations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationData),
    });

    redirect(preference.sandbox_init_point!);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b  to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <HeartIcon className="w-6 h-6 text-red-500 mr-2" />
            Haz una Donación
          </CardTitle>
          <CardDescription className="text-center">
            Tu apoyo hace la diferencia. ¡Gracias por tu generosidad!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={donate} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-sm font-medium">
                Monto de la Donación
              </Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Ingresa el monto"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Tu Mensaje
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Escribe un mensaje (opcional)"
                className="w-full h-24"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Donar Ahora
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          Tus donaciones son procesadas de forma segura por Mercado Pago.
        </CardFooter>
      </Card>
    </div>
  );
}
