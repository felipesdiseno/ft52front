import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div className='w-64 h-full flex flex-col justify-between border-e bg-white'>
        <div className='px-4 py-6'>
          <span className='sr-only'>Home</span>
          <Image
            alt='Descripción de la imagen'
            src='/image/Logo.png'
            width={35}
            height={25}
          />
          <a
            href='/'
            className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          >
            Volver a inicio
          </a>

          <ul className='mt-6 space-y-1'>
            <li>
              <a
                href='#'
                className='block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700'
              >
                General
              </a>
            </li>

            <li>
              <details className='group [&_summary::-webkit-details-marker]:hidden'>
                <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                  <span className='text-sm font-medium'> Eventos </span>

                  <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </summary>

                <ul className='mt-2 space-y-1 px-4'>
                  <li>
                    <Link
                      href='dashBoard-Admin/events/editEvent'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Crear y editar Eventos
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='dashboard-Admin/events/currentevents'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Eventos vigentes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/eventAssitance'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Asistencia de eventos
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className='group [&_summary::-webkit-details-marker]:hidden'>
                <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                  <span className='text-sm font-medium'> Donaciones </span>

                  <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </summary>

                <ul className='mt-2 space-y-1 px-4'>
                  <li>
                    <a
                      href='#'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Historial de donaciones
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className='group [&_summary::-webkit-details-marker]:hidden'>
                <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                  <span className='text-sm font-medium'> Posteos </span>

                  <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </summary>

                <ul className='mt-2 space-y-1 px-4'>
                  <li>
                    <a
                      href='#'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Crear y editar noticias
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      carga de imagenes de eventos
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Historial de Eventos e imagenes
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className='group [&_summary::-webkit-details-marker]:hidden'>
                <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                  <span className='text-sm font-medium'> Usuarios </span>

                  <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </summary>

                <ul className='mt-2 space-y-1 px-4'>
                  <li>
                    <a
                      href='dasBoard-Admin/controlUsuarios'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Modificar estado de usuarios
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Inscripciones
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li></li>
          </ul>
        </div>
        <a
          href='#'
          className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
        >
          Cerrar sesion
        </a>
      </div>

      <main className='flex-grow p-6 bg-gray-100'>{children}</main>
    </div>
  )
}
