'use client'
import { useAuth } from "@/context/AuthContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IUserObject {
    providerAccountId: string;
    email: string;
    name: string;
    accessToken: string;
    image: string;
  }

export default function LoadingSessions(){

const {setToken, setSession} = useAuth()
const router = useRouter()

const redirect = useRouter()
const { data: session, status } = useSession()
  
useEffect(() => {
  
  if (status === 'loading') return; // Espera a que se cargue la sesión
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', status, session)
  if (status === 'authenticated' && session.user) {
    const userObject = {
      providerAccountId: session.user.providerAccountId || '',
      email: session.user.email || '',
      name: session.user.name || '',
      accessToken: session.accessToken || '',
      image: session.user.image || '',
    };
    postUserSessionData(userObject);
  } else {
    alert('Error en la respuesta del servidor');
    router.push('/login');
  }
}, [session, status, router]);

const postUserSessionData = async (userObject: IUserObject) => {
    try {
      const response = await fetch("http://localhost:3003/auth/auth0/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObject),
      });
  
      if (!response.ok) {
        window.alert('Error en la respuesta del servidor'), redirect.push('/login');
      }
  
      const data = await response.json();
      //console.log('Datos enviados exitosamente al backend.', data);
      setToken(data.token);
      setSession(data.user);
      redirect.push('/');
    } catch (error) {
      console.error('Error al enviar los datos al backend:', error);
      throw error;
    }
  };


return(
    <div>Loading...</div>
)
}

