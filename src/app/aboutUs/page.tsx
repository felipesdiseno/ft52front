import React from 'react';

function AboutUs() {
  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col mt-4 ">
        <h1 className="text-3xl font-bold text-gray-500 mb-4 items-start mt-4">
          Nuestra historia
        </h1>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <p className="text-justify">
              En el año 1972, el <strong>padre José Manzano</strong> Fundaría el
              movimiento juvenil Peregrinos, empezando a trabajar con jovenes
              cuando fue traslado a la Comunidad de la Parroquia Nuestra Señora
              de los Dolores de Mendoza. Su labor se baó en la experiencia que
              habia adquirido en el Movimiento Cursillos de Cristiandad y
              Circulos de juventud en la ciudad de Buenos Aires. EL movimiento
              quedo oficialmente constituido el día 30 de junio de 1972.
              Iniciando sus actividades el 17 de agosto de ese mismo año, en esa
              fecha se realizó el primer Oasis dirigido para varones, teniendo
              por nombre <strong>Copos de Gracia</strong>. El segundo Oasis se
              realizó en Octubre de ese mismo año y se dirigió a mujeres.
              <br />
              Con el tiempo, los jóvenes del Este (San Martín y Rivadavia)
              comenzarón a participar de los Oasis y otras actividades del
              movimiento, debido a las distancias, las mismas se emperazón a
              realizar en el lugar, dando orgien a Peregrinos Zona Este.
            </p>
            <p className="text-justify mt-4">
              En el Movimiento Juvenil Peregrinos, creemos firmemente en el
              poder de la conversión y el servicio. Nuestra actividad principal
              es el retiro de conversión llamado &quot; Oasis &quot; , que se
              lleva a cabo una vez al año. Este retiro es un espacio de
              reflexión y renovación espiritual, donde miembros de nuestra
              comunidad se unen para profundizar en su fe y fortalecer sus
              lazos. El retiro es organizado por un grupo comprometido de
              voluntarios que se dedica a hacer de esta experiencia un momento
              transformador para todos los participantes. A lo largo del año,
              también nos dedicamos a diversas actividades que benefician a
              diferentes comunidades. Realizamos campañas para recolectar ropa y
              alimentos, atendiendo a las necesidades de aquellos que atraviesan
              momentos difíciles. Además, organizamos festejos para celebrar
              ocasiones especiales, como el Día del Niño, donde buscamos brindar
              alegría y amor a los más pequeños. Para llevar a cabo todas estas
              actividades y alcanzar nuestros objetivos, realizamos múltiples
              eventos de recaudación de fondos. Estas iniciativas nos permiten
              financiar nuestros proyectos y, a su vez, involucrar a nuestra
              comunidad en acciones solidarias que impactan positivamente en
              quienes nos rodean. Te invitamos a unirte a nosotros en esta
              misión de fe y servicio, donde cada acción cuenta y cada vida
              puede ser transformada.
            </p>
          </div>
          <img
            src="images/logo viejo y nuevo.jpg"
            alt="logo"
            className=" rounded-xl shadow-xl h-[600px] "
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
