'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';

interface AuthContextProps {
  children: React.ReactNode;
}

interface Session {
  id: string;
  name: string;
  email: string;
  image: string | undefined;
  providerAccountId: string;
  creatorId: string;
  status: string | undefined;
  address: string;
  phone: string;
}

interface AuthContextType {
  token: string | null;
  userSession: Session | null;
  setToken: (token: string | null) => void;
  setSession: (userSession: Session | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  userSession: null,
  setToken: () => {},
  setSession: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [userSession, setSession] = useState<Session | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    console.log('useEffect de context');

    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      const storedSession = JSON.parse(
        localStorage.getItem('userSession') || 'null',
      );

      if (storedToken && storedSession) {
        setSession(storedSession);
        setToken(storedToken);
      } else {
        // Si no hay token, limpiar sesión y localStorage
        setSession(null);
        localStorage.removeItem('userSession');
        setToken(null);
      }
    }
  }, []);

  const handleSetToken = (newToken: string | null) => {
    setToken(newToken);
    if (!newToken) {
      setSession(null);
      localStorage.removeItem('token');
      localStorage.removeItem('userSession');
    } else {
      localStorage.setItem('token', newToken);
    }
  };

  const handleUserData = (userSession: Session | null) => {
    setSession(userSession);
    if (!userSession) {
      setToken(null);
      localStorage.removeItem('token');
      localStorage.removeItem('userSession');
    } else {
      localStorage.setItem('userSession', JSON.stringify(userSession));
    }
  };

  const logout = () => {
    setToken(null);
    setSession(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userSession');
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: handleSetToken,
        userSession,
        setSession: handleUserData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

/*
cart, setOnCart: handleNewProduct, randomizer, setRandomizer: handleRandomizer,

setRemoveProduct: handleRemoveProduct, wishlist, setOnWishList: handleNewWishProduct, setRemoveWishList: handleRemoveWishProduct, clearCart: clearCart

*/
