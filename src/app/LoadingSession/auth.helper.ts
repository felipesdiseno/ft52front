'use client'
import { useAuth } from "@/context/AuthContext";


export const verifyUserToken = async (accessToken: string) => {
  const { token , session, setSession, setToken } = useAuth()
    try {
      const response = await fetch("http://localhost:3003/auth/auth0/verify", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener el token del backend');
      }
  
      const data = await response.json(); // Supongamos que el backend devuelve un objeto con la sesión y el token
      setToken(data.token);
      setSession(data.user);
      return data; // Retorna los datos de la sesión y el token
    } catch (error) {
      console.error('Error en la petición GET:', error);
      throw error; // Lanza el error para manejo posterior
    }
  };