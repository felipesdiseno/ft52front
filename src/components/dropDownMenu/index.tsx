import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useAuth } from '@/context/AuthContext';
function DropDownMenu() {
  const { data: session } = useSession();
  const { token, userSession } = useAuth();
  const { logout } = useAuth();

  const handleLogOut = () => {
    signOut({ callbackUrl: '/' });
    logout();
  };

  return (
    <div className="absolute p-2 flex flex-col top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
      {(!userSession && !token && !session) ? (
        <Link
          href="/login"
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          Iniciar sesión
        </Link>
      ) : (
        <>
          <Link
            href="/dashBoard"
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Mi perfil
          </Link>
          <Link
            href="/dashBoard-Admin"
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Panel Administrador
          </Link>
          <div
            onClick={() => handleLogOut()}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Cerrar sesión
          </div>
        </>
      )}
    </div>
  );
}

export default DropDownMenu;
