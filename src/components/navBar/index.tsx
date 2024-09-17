import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
function NavBar() {
  return (
    <div className="flex justify-between w-full m-x-auto p-2 mt-2">
      <div className="flex flex-row items-center gap-5 ">
        <div className="flex flex-row items-center">
          <img src="/mjp1.png" alt="img mjp" className="w-[45px] h-[45px]" />
          <div className="flex flex-col">
            <h2>MOVIMIENTO </h2>
            <h2>JUVENIL PEREGRINOS</h2>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <Link href="/">Inicio</Link>
          <Link href="/aboutUs">Nustra comunidad</Link>
          <Link href="/">Donaciones</Link>
          <Link href="/">Eventos</Link>

          <FaRegUserCircle />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
