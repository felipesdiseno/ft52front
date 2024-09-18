import React from "react";
import Link from "next/link";
function DropDownMenu() {
  return (
    <div className="absolute p-2 flex flex-col top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
      <Link
        href="/login"
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        Iniciar sesión
      </Link>
      <Link href="/404" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Mi perfil
      </Link>
      <Link href="/404" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Cerrar sesión
      </Link>
    </div>
  );
}

export default DropDownMenu;
