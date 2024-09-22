'use client'

import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { postUserSessionData } from '../loginForm/auth.helper'

function LoadingSessionComponent() {
  const router = useRouter()
  const { data: session, status } = useSession()
  
  useEffect(() => {
    const handleUserSession = async () => {
      if (status === 'authenticated' && session?.user) {
        const userObject = {
          providerAccountId: session.user.providerAccountId || '',
          email: session.user.email || '',
          name: session.user.name || '',
          accessToken: session.accessToken || '',
          image: session.user.image || '',
        }

        console.log('Datos de la sesión:', userObject)

        try {
          // Envía los datos al backend y espera la respuesta
          const response = await postUserSessionData(userObject)

          // Supongamos que tu función postUserSessionData retorna la respuesta
          if (response && response.token) {
            //!!!!!!!
            //session.token=response.token {intentar hacer que sea una extencion de Session o que pueda admitir otro parametro};
           
            // Si hay un token en la respuesta, redirige al home
            router.push('/')
          } else {
            console.error('Token no recibido')
            // Manejo de errores si es necesario
          }
        } catch (error) {
          console.error('Error al enviar los datos al backend:', error)
          // Manejo de errores si es necesario
        }
      }
    }

    handleUserSession()
  }, [session, status, router])

  return <h2>Cargando...</h2>
}

export default LoadingSessionComponent
