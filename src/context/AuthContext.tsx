'use client'

import React, {   useState, useEffect, createContext, useContext } from 'react'

interface AuthContextProps {
  children: React.ReactNode
}

interface Session {
  id: string
  name: string
  email: string
  image: string | undefined
  providerId: string
  creatorId: string
}
interface AuthContextType {
  token: string | null
  session: Session | null
  setToken: (token: string | null) => void
  setSession: (session: Session | null) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  session: null,
  setToken: () => {},
  setSession: () => {},
  logout: () => {},
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [token, setToken] = useState<string | null>(null)
 
  useEffect(() => {
    console.log('useEffect de context');
    // Verificar si el entorno es del lado del cliente
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      const storedSession = JSON.parse(localStorage.getItem('session') || 'null');
  
      if (storedToken && storedSession) {
        // Si hay un token y una sesión almacenados, establece el estado
        setSession(storedSession);
        setToken(storedToken);
      } else {
        // Si no hay token, limpiar sesión y localStorage
        setSession(null);
        localStorage.removeItem('session');
        setToken(null);
      }
    }
  }, []);


  const handleSetToken = (newToken: string | null) => {
    setToken(newToken)
    if (!newToken) {
      setSession(null)
      localStorage.removeItem('token')
      localStorage.removeItem('session')
    } else {
      localStorage.setItem('token', newToken)
    }
  }

  const handleUserData = (session: Session | null) => {
    setSession(session)
    if (!session) {
      setToken(null)
      localStorage.removeItem('token')
      localStorage.removeItem('session')
    } else {
      localStorage.setItem('session', JSON.stringify(session))
    }
  }


  const logout = () => {
    setToken(null)
    setSession(null)
    localStorage.removeItem('token')
    localStorage.removeItem('session')
  }
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: handleSetToken,
        session,
        setSession: handleUserData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

/*
cart, setOnCart: handleNewProduct, randomizer, setRandomizer: handleRandomizer,

setRemoveProduct: handleRemoveProduct, wishlist, setOnWishList: handleNewWishProduct, setRemoveWishList: handleRemoveWishProduct, clearCart: clearCart

*/
