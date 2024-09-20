"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { validateLoginForm } from "./validateFormLogin";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import handleUserAuthentication from "./auth.helper";
import { Session } from "next-auth";

// Extender el tipo Session para incluir accessToken y providerAccountId
interface CustomSession extends Session {
  accessToken?: string;
  providerAccountId?: string;
}

function LoginForm() {
  const [loginUser, setLoginUser] = useState<ILoginUser>({ email: "", password: "" });
  const [errors, setErrors] = useState<ILoginError>({});

  const { data: session } = useSession() as { data: CustomSession | null };
  console.log("Sesión actual:", session);

  useEffect(() => {
    // Si la sesión es válida, enviamos los datos al backend
    if (session) {
      console.log("Sesión detectada:", session);
      handleUserAuthentication(session);
    }
  }, [session]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateLoginForm(loginUser);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulario válido. Enviando datos...");
      // Aquí puedes manejar el inicio de sesión con email y password
    } else {
      setErrors(validationErrors);
    }
  };

  const handleClickGoogle = async () => {
    try {
      // Inicia sesión con Google sin redirigir de inmediato
      const response = await signIn("google", { redirect: false });

      console.log("Respuesta de signIn:", response);

      // Verifica si la sesión ya contiene la información del usuario
      if (session) {
        const userData = {
          providerAccountId: session?.providerAccountId, // ID del proveedor de Google
          email: session?.user?.email,
          name: session?.user?.name,
        };

        console.log("Datos del usuario autenticado con Google:", userData);

        // Aquí puedes enviar los datos al backend usando fetch
        const backendResponse = await fetch("/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const backendData = await backendResponse.json();

        console.log("Respuesta del backend:", backendData);

        if (backendResponse.ok) {
          console.log("Usuario registrado/iniciado sesión en el backend correctamente");
        } else {
          console.log("Error al registrar/iniciar sesión en el backend");
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google", error);
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Descripción de la imagen"
            src="/image/logo-viejo-nuevo.jpg"
            layout="fill"
            objectFit="cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="w-full max-w-4xl h-auto lg:w-[500px] lg:h-[350px] flex flex-col justify-center mx-auto px-4">
            <a className="block text-blue-600" href="#">
              <span className="sr-only">Home</span>
              <Image
                alt="Descripción de la imagen"
                src="/image/Logo.png"
                width={50}
                height={25}
              />
            </a>
            <div>
              <h1 className="mt-6 text-2xl font-serif text-gray-900 sm:text-3xl md:text-4xl">
                Bienvenidos a Movimiento Juvenil Peregrino
              </h1>
            </div>
            <p className="mt-4 leading-relaxed text-gray-700 sm:text-2xl md:text-2xl">
              "Reconociéndonos testigos, ofrecemos nuestros dones a la iglesia".
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={loginUser.email}
                  onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}
                  className={`mt-1 w-full p-4 border ${errors.email ? "border-red-500" : "border-gray-200"} bg-white text-sm text-gray-700 shadow-sm`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={loginUser.password}
                  onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
                  className={`mt-1 w-full p-4 border ${errors.password ? "border-red-500" : "border-gray-200"} bg-white text-sm text-gray-700 shadow-sm`}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Ingresar
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  No tienes una cuenta? Puedes registrarte{" "}
                  <Link href={"/register"} className="text-gray-950">Aqui</Link>.
                </p>
              </div>
            </form>

            <button
              onClick={handleClickGoogle}
              type="button"
              className="flex items-center justify-center w-full max-w-xs mx-auto mt-6 px-6 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100 focus:border-blue-600 transition duration-300 ease-in-out"
            >
              <FcGoogle className="w-6 h-6" />
              <span className="ml-3 text-sm font-medium text-gray-700">
                Continuar con Google
              </span>
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}

export default LoginForm;
