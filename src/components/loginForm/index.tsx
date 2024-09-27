'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { validateLoginForm } from './validateFormLogin';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
interface ILoginUser {
  email: string;
  password: string;
}

interface ILoginError {
  email?: string;
  password?: string;
}

function LoginForm() {
  const port = process.env.NEXT_PUBLIC_APP_API_PORT;
  const route = useRouter();

  const { setToken, setSession } = useAuth();
  const [loginUser, setLoginUser] = useState<ILoginUser>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ILoginError>({});

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateLoginForm(loginUser);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulario válido. Enviando datos...');

      try {
        const response = await fetch(`http://localhost:${port}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginUser),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('ERROR EN LA RESPUESTA DEL SERVIDOR:', errorData);
          window.alert('ERROR EN LA RESPUESTA DEL SERVIDOR: ' + errorData.message);
          route.push('/login');
          return;
        }
        
        const data = await response.json();
        if(data.redirect === true){
          window.alert('No has terminado de completar tu registro al iniciar sesion con el servicio de google ,te invitamos a completarlo');
          handleClickGoogle();
          return;
        }

        setSession(data.user);
        setToken(data.token);
          window.alert('has iniciado sesion exitosamente');
          route.push('/');
          return;

      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        setErrors({ email: 'Error en el inicio de sesión' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleClickGoogle = async () => {
    try {
      await signIn('google', { callbackUrl: '/loadingsession' });
    } catch (error) {
      console.error('Error en signIn con Google', error);
    }
  };

  return (
    <section className="bg-white mb-10">
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
              &quot; Reconociéndonos testigos, ofrecemos nuestros dones a la
              iglesia. &quot;
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
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
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, email: e.target.value })
                  }
                  className={`mt-1 w-full p-4 border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
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
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, password: e.target.value })
                  }
                  className={`mt-1 w-full p-4 border ${errors.password ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm mb-4`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="flex flex-col items-center gap-4 2-full">
                <div className="flex flex-row items-center gap-4 justify-center w-full mt-10">
                  <button
                    type="submit"
                    className="inline-block  rounded-md border border-blue-600 bg-blue-600 px-2 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 w-full max-w-xs"
                  >
                    Ingresar
                  </button>
                  <button
                    onClick={handleClickGoogle}
                    type="button"
                    className="flex items-center justify-center w-full max-w-xs px-2 py-3 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100 focus:border-blue-600 transition duration-300 ease-in-out"
                  >
                    <FcGoogle className="w-6 h-6" />
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      Continuar con Google
                    </span>
                  </button>
                </div>
                <p className="mt-6 text-sm text-gray-500 sm:mt-0">
                  No tienes una cuenta? Puedes registrarte{' '}
                  <Link href={'/register'} className="text-gray-950">
                    Aquí
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default LoginForm;