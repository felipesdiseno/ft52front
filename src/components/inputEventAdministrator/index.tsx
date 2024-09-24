'use client';
import React, { useState, useEffect } from 'react';
import { DatePickerDemo } from './datePicker';
import { Input } from '@/components/ui/input';
import { InputFile } from './inputFile';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';



function InputEventAd() {
  const [title, setTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [description, setDescription] = useState('');
  // const [creatorId, setCreatorId] = useState('');
  const [images, setImages] = useState<string | null>(null);
  const { token, session } = useAuth();
  const handleSubmit = async () => {
    console.log('Nombre del evento:', title);
    console.log('Fecha del evento:', eventDate);
    console.log('Ubicación del evento:', eventLocation);

   const creatorId= session?.creatorId

    if (!title || !eventDate || !eventLocation || !description || !images || !token || !creatorId) {
      console.error('Todos los campos son obligatorios y se requiere autenticación.');
      return;
    }
    

    const eventData = {
      title: title,
      date: eventDate,
      location: eventLocation,
      description: description,
      images: [images],
      creatorId: creatorId,
    };

    try {
      const response = await fetch('http://localhost:3005/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Token de autenticación en la cabecera
        },
        body: JSON.stringify(eventData),
      });

      console.log('Respuesta del servidor:', response);
      if (response.ok) {
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
      <div className="p-2 space-y-2">
        <h1 className="font-bold text-[28px] text-gray-500 mb-4">
          Crear evento:
        </h1>
        <div className="flex flex-row gap-2">
          <Input
            type="text"
            placeholder="Nombre del evento"
            className="w-auto bg-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DatePickerDemo onChange={(date: string) => setEventDate(date)} />
        </div>
        <div className="flex flex-row gap-2">
          <Input
            type="text"
            placeholder="Ubicación"
            className="w-auto bg-white"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Descripción del evento"
            className="w-[280px] bg-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="cursor-pointer">
          <InputFile onImageUpload={setImages} />
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
