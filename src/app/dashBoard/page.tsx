'use client'

import { DonationsTable } from '@/components/tablaDonaciones'
import { useEffect, useContext } from 'react'

const aportes = [
  {
    aporte: 'Donación',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    aporte: 'Donación',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    aporte: 'Donación',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    aporte: 'Donación',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    aporte: 'Donación',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    aporte: 'Donación',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    aporte: 'Donación',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
]

function UserDashboard() {
  // const { user, isLogged } = useContext(UserContext)
  // const {events } = useContext(eventContext)

  // useEffect(() => {
  //   if (!isLogged) {
  //     window.location.href = 'login'
  //   } else {
  //     console.log('Datos del usuario:', user)
  //     console.log('eventos:', events)
  //   }
  // }, [isLogged])

  // if (!user) {
  //   return (
  //     <div className='flex items-center justify-center h-screen'>
  //       Loading...
  //     </div>
  //   )
  // }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='p-6 rounded-lg shadow-lg relative w-full max-w-md bg-slate-200'>
        <img
          src='/mjp1.png'
          alt='img mjp'
          className='absolute top-4 left-4 w-[45px] h-[45px]'
        />

        <h1 className='text-2xl font-bold mb-6 text-center'>Mi perfil</h1>

        <div className='mb-6'>
          <div className='h-[2px] bg-blue-500'></div>
          <div className='h-[2px] bg-green-500'></div>
        </div>

        <div className='mb-4'>
          <p>
            <strong>Nombre:</strong> {}
          </p>
          <p>
            <strong>Email:</strong> {}
          </p>
          <p>
            <strong>Dirección:</strong> {}
          </p>
          <p>
            <strong>Teléfono:</strong> {}
          </p>
        </div>

        <div className='mt-6'>
          <h2 className='text-xl font-semibold mb-2'>Tus próximos eventos</h2>
          <ul className='list-disc list-inside'>
            <li>Evento 1</li>
            <li>Evento 2</li>
            <li>Evento 3</li>
          </ul>
        </div>
        <DonationsTable aportes={aportes} />
      </div>
    </div>
  )
}

export default UserDashboard
