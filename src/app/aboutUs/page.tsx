import React from 'react'

function AboutUs() {
  return (
    <div className='w-full'>
      <div className='container mx-auto flex flex-col mt-4 '>
        <h1>Nuestra historia</h1>
        <div className='flex flex-row gap-4'>
          <div className='flex flex-col'>
            <p className='text-justify'>
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
          </div>
          <img
            src='images/logo viejo y nuevo.jpg'
            alt='logo'
            className=' rounded-xl shadow-xl h-[600px] '
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
