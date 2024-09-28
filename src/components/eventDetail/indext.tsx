"use client";

interface EventCardProps {
  highlight: boolean;
  createDate: Date;
  status: string;
  title: string;
  eventDate: Date;
  eventLocation: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
}

const EventCardDetail: React.FC<EventCardProps> = ({
  images = [],
  title,
  status,
  eventDate,
  eventLocation,
  stock,
  price,
  description,
}) => {
  return (
    <aside className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl mx-auto my-6 md:ml-4 md:max-w-6xl">
      <div className="w-full md:w-2/5">
        <img
          src={images && images.length > 0 ? images[0] : "https://via.placeholder.com/400"}
          alt="Event Image"
          className="object-cover w-full h-64 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
      </div>

      <div className="flex flex-col justify-between p-6 w-full md:w-3/5 space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-500">Descripcion: {description}</p>
          <div className="space-y-2">
            <p className="text-gray-500">Ubicación: {eventLocation}</p>
            <p className="text-gray-500">
              Fecha: {new Date(eventDate).toLocaleDateString()}
            </p>
            <p className="text-gray-500">
              Hora:{" "}
              {new Date(eventDate).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="text-gray-500">Lugares: {stock}</p>

            <p className="text-gray-500">
              Precio: {price > 0 ? price : "gratuito"}
            </p>
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full md:w-auto">
          Asistiré
        </button>
      </div>
    </aside>
  );
};

export default EventCardDetail;
