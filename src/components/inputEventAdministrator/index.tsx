"use client";
import React, { useState } from "react";
import { DatePickerDemo } from "./datePicker";
import { Input } from "@/components/ui/input";
import { InputFile } from "./inputFile";
import { Button } from "../ui/button";

function InputEventAd() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleSubmit = async () => {
    console.log("Nombre del evento:", eventName);
    console.log("Fecha del evento:", eventDate);
    console.log("Ubicación del evento:", eventLocation);
    console.log("Organizador del evento:", eventOrganizer);
    console.log("URL de la imagen:", imgUrl);
    if (
      !eventName ||
      !eventDate ||
      !eventLocation ||
      !eventOrganizer ||
      !imgUrl
    ) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    const eventData = {
      name: eventName,
      date: eventDate,
      location: eventLocation,
      organizer: eventOrganizer,
      imageUrl: imgUrl,
    };
    console.log("Datos a enviar:", eventData);
    try {
      const response = await fetch("https://your-backend-url.com/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
      console.log("Respuesta del servidor:", response);
      if (response.ok) {
        console.log("Evento creado exitosamente");
      } else {
        console.error("Error al crear el evento");
      }
    } catch (error) {
      console.error("Error:", error);
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
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
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
            placeholder="Organizador"
            className="w-[280px] bg-white"
            value={eventOrganizer}
            onChange={(e) => setEventOrganizer(e.target.value)}
          />
        </div>
        <InputFile onImageUpload={setImgUrl} />
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
