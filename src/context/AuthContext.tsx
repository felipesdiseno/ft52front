'use client'

import React, {   useState, useEffect, createContext, useContext } from 'react'

interface AuthContextProps {
  children: React.ReactNode
}

interface Session {
  id: string
  name: string
  email: string
  image: string
  providerId: string
  creatorId: string
  //address: string;
  //phone: string;
  //role: string;
  //orders:IOrder[]|[];

}
interface AuthContextType {
  token: string | null
  session: Session | null
  setToken: (token: string | null) => void
  setSession: (session: Session | null) => void
  logout: () => void
  //randomizer: number;
  //cart: IProduct[];
  //wishlist: IProduct[];
  
  //setOnCart: (newProduct: IProduct) => void;
  //clearCart: () => void;
  //setOnWishList: (newProduct: IProduct) => void;
  //setRemoveProduct: (quitProduct: number) => void;
  //setRemoveWishList: (quitProduct: number) => void;
  //setRandomizer: (randomizer: number) => void;
 
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  session: null,
  setToken: () => {},
  setSession: () => {},
  logout: () => {},
  //randomizer: 0,
  //cart: [],
  //wishlist: [],
  //setOnWishList: () => {},
  
  //setOnCart: () => {},
  //clearCart: () => {},
  //setRemoveProduct: () => {},
  //setRemoveWishList: () => {},
  //setRandomizer: () => {},
 
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [token, setToken] = useState<string | null>(null)
  //const [cart, setCart] = useState<IProduct[]>([]);
  //const [wishlist, setWishlist] = useState<IProduct[]>([]);
  //const [randomizer, setRandomizer] = useState<number>(0);
  //const cartKey = `cart-${userData?.id}`;

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

  /*const clearCart = () => {
    setCart([]);
    localStorage.setItem(cartKey, JSON.stringify([]));
  };

  const handleNewProduct = (newProduct: IProduct) => {
    console.log("handleNewProduct",newProduct)
      const newCart:IProduct[] = [...cart, newProduct];
      localStorage.setItem(cartKey, JSON.stringify(newCart))
      setCart(newCart);
  }
    const handleRemoveProduct = (quitProduct: number) => {
      console.log ("handleRemoveProduct",quitProduct)
      const newCart = cart.filter((product, index) => index !== quitProduct);
      setCart(newCart);
    localStorage.setItem(cartKey, JSON.stringify(newCart));
  }

  const handleNewWishProduct = (newProduct: IProduct) => {
    console.log("handleNewProduct",newProduct)
      const newWishList:IProduct[] = [...wishlist, newProduct];
      localStorage.setItem(cartKey, JSON.stringify(newWishList))
      setWishlist(newWishList);
  }
    const handleRemoveWishProduct = (quitProduct: number) => {
      console.log ("handleRemoveProduct",quitProduct)
      const newWishList = wishlist.filter((product, index) => index !== quitProduct);
      setWishlist(newWishList);
    localStorage.setItem(cartKey, JSON.stringify(newWishList));
  }*/

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

  /*const handleRandomizer = ():void => {
    setRandomizer(Math.random());
  };*/

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
