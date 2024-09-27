'use client';
import React, { useState } from 'react';
import { DatePickerDemo } from './datePicker';
import { Input } from '@/components/ui/input';
import { InputFile } from './inputFile';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import IInputEventAdProps from '@/interfaces/IInputEventAdProps';

function InputEventAd({
  title,
  eventDate,
  eventLocation,
  description,
  price,
  stock,
  setTitle,
  setEventDate,
  setEventLocation,
  setDescription,
  setPrice,
  setStock,
}: Partial<IInputEventAdProps>) {
  const port = process.env.NEXT_PUBLIC_APP_API_PORT;
  const { token, userSession } = useAuth();
  const [image, setImage] = useState<string>('');
  console.log('zzzzzzzzzzzzzz', eventDate);
  const handleSubmit = async () => {
    console.log('@@@@@@@@@@@@@@@', userSession);
    const creatorId = userSession?.creatorId;
    if (!title) {
      console.error('El campo "Nombre del evento" es obligatorio.');
      return;
    }
    if (!eventDate) {
      console.error('El campo "Fecha del evento" es obligatorio.');
      return;
    }
    if (!eventLocation) {
      console.error('El campo "Ubicación" es obligatorio.');
      return;
    }
    if (!description) {
      console.error('El campo "Descripción del evento" es obligatorio.');
      return;
    }
    if (!image) {
      console.error('La imagen es obligatoria.');
      return;
    }

    if (!creatorId) {
      console.error('Se requiere un "creatorId".');
      return;
    }
    if (
      !title ||
      !eventDate ||
      !eventLocation ||
      !description ||
      !image ||
      !creatorId
    ) {
      console.error(
        'Todos los campos son obligatorios y se requiere autenticación.',
      );
      return;
    }
    const cleanedDateString = eventDate.replace(/(\d+)(th|st|nd|rd)/, '$1');

    const eventDateConverted = new Date(cleanedDateString);
    const eventData = {
      title: title,
      description: description,
      eventDate: eventDateConverted,
      eventLocation: eventLocation,
      images: [image],
      stock: stock || 0,
      price: price || 0,
      creator: creatorId,
    };

    try {
      console.log(
        '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@qqqqqq Event data:',
        eventData,
      );
      const response = await fetch(`http://localhost:${port}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      });

      console.log('Respuesta del servidor:', response);
      if (response.status === 201) {
        console.log('Evento creado exitosamente');
      } else {
        console.error('Error al crear el evento');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="">
      <div className="p-2 space-y-2 ">
        <h1 className="font-bold text-[28px] text-gray-500 mb-4">
          Crear evento:
        </h1>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col">
            <p className="text-white">Capacidad:</p>
            <Input
              type="text"
              placeholder="Nombre del evento"
              className="w-auto bg-white"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="text-white">Capacidad:</p>

            <DatePickerDemo onChange={(date: string) => setEventDate(date)} />
          </div>
          <div className="flex flex-col  items">
            <p className="text-white">Capacidad:</p>

            <Input
              type="text"
              placeholder="Ubicación"
              className="w-auto bg-white"
              onChange={(e) => setEventLocation(e.target.value)}
            />
            <p className="text-white">Capacidad:</p>

            <Input
              type="text"
              placeholder="Descripción del evento"
              className="w-[280px] bg-white"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Costo:</p>
            <Input
              type="number"
              placeholder="Costo del evento"
              className="w-[280px] bg-white"
              defaultValue={0}
              onChange={(e) => setPrice(e.target.value)}
            />
            <p className="text-gray-500">Capacidad:</p>

            <Input
              type="number"
              placeholder="¿Cuantas personas pueden asistir?"
              defaultValue={0}
              className="w-[280px] bg-white"
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
        </div>
        <div className="cursor-pointer">
          <InputFile
            onImageUpload={(imageUrl: string) => {
              console.log('Imagen subida, URL recibida:', imageUrl); // Depuración
              setImage(imageUrl); // Actualiza el estado con la URL de la imagen
            }}
          />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button className="bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-600 hover:text-white">
          Cancelar
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Crear Evento
        </Button>
      </div>
    </div>
  );
}

export default InputEventAd;
