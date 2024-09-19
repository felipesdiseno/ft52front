import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

const eventos = [
  { id: 1, nombre: "Concierto", fecha: new Date(2024, 0, 15), precio: 150 },
  { id: 2, nombre: "Feria", fecha: new Date(2024, 1, 20), precio: 250 },
  { id: 3, nombre: "Festival", fecha: new Date(2024, 2, 10), precio: 800 },
  // Otros eventos
];

export function SelectScrollable2() {
  const [mesSeleccionado, setMesSeleccionado] = React.useState<number | null>(null);
  const [precioSeleccionado, setPrecioSeleccionado] = React.useState<number | null>(null);

  const eventosFiltrados = eventos
    .filter(evento => mesSeleccionado === null || mesSeleccionado === 0 || evento.fecha.getMonth() === mesSeleccionado - 1)
    .filter(evento => precioSeleccionado === null || precioSeleccionado === 0 || evento.precio <= precioSeleccionado);

  return (
    <div>
      
      <Select onValueChange={(value) => setMesSeleccionado(Number(value))}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Selecciona un mes" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Meses</SelectLabel>
            <SelectItem value="0">Todos</SelectItem>
            <SelectItem value="1">Enero</SelectItem>
            <SelectItem value="2">Febrero</SelectItem>
            <SelectItem value="3">Marzo</SelectItem>
            <SelectItem value="4">Abril</SelectItem>
            <SelectItem value="5">Mayo</SelectItem>
            <SelectItem value="6">Junio</SelectItem>
            <SelectItem value="7">Julio</SelectItem>
            <SelectItem value="8">Agosto</SelectItem>
            <SelectItem value="9">Septiembre</SelectItem>
            <SelectItem value="10">Octubre</SelectItem>
            <SelectItem value="11">Noviembre</SelectItem>
            <SelectItem value="12">Diciembre</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      
      <Select onValueChange={(value) => setPrecioSeleccionado(Number(value))} className="mt-4">
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Selecciona un precio máximo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Precios</SelectLabel>
            <SelectItem value="0">Todos</SelectItem>
            {[...Array(10)].map((_, index) => (
              <SelectItem key={index} value={(index + 1) * 100}>
                {`$${(index + 1) * 100}`}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      
      <div className="mt-4">
        <h2>Eventos:</h2>
        {eventosFiltrados.length > 0 ? (
          <ul>
            {eventosFiltrados.map((evento) => (
              <li key={evento.id}>
                {evento.nombre} - {evento.fecha.toLocaleDateString()} - ${evento.precio}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay eventos para este filtro.</p>
        )}
      </div>
    </div>
  );
}
