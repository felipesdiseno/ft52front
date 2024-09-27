"use Client";

const EventCard = () => {
  return (
    <aside className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl mx-auto my-6 md:ml-4 md:max-w-6xl">
      {/* Imagen */}
      <div className="w-full md:w-2/5">
        <img
          src="https://via.placeholder.com/400"
          alt="Event Image"
          className="object-cover w-full h-64 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between p-6 w-full md:w-3/5 space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Título del Evento</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est animi rem nesciunt tenetur ipsam. Fugit in eum culpa quo voluptatum, quis autem odio error optio nesciunt accusamus minima repudiandae consequatur.
          </p>
          <div className="space-y-2">
            <p className="text-gray-500">Ubicación: Ciudad, País</p>
            <p className="text-gray-500">Fecha: 20/20/2024</p>
            <p className="text-gray-500">Hora: 10:00 AM</p>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full md:w-auto"
        >
          Asistiré
        </button>
      </div>
    </aside>
  );
};

export default EventCard;
