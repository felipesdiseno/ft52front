'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { validateLoginForm } from './validateFormLogin'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import Image from 'next/image'

// Interfaces para tipar los datos del usuario y los errores de validación
interface ILoginUser {
  email: string
  password: string
}

interface ILoginError {
  email?: string
  password?: string
}

function LoginForm() {
  // Estado para almacenar los datos del usuario y los errores de validación
  const [loginUser, setLoginUser] = useState<ILoginUser>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<ILoginError>({})

  // Obtiene la sesión actual
  // const { data: session, status } = useSession()

  // Efecto para manejar la sesión autenticada
  /*useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      const userObject = {
        providerAccountId: session.user.providerAccountId || '',
        email: session.user.email || '',
        name: session.user.name || '',
        accessToken: session.accessToken || '',
        image: session.user.image || '',
      }

      console.log('Datos de la sesión:', userObject)

      // Usa la función renombrada para enviar los datos
      postUserSessionData(userObject)
    }
     fetch("http://localhost:3003/events", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
  }, [session, status])
*/
  // Maneja el envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const validationErrors = validateLoginForm(loginUser)

    // Si no hay errores de validación, se puede enviar el formulario
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulario válido. Enviando datos...')
      // Aquí podrías agregar la lógica para enviar el formulario de email y password
    } else {
      setErrors(validationErrors) // Establece los errores si los hay
    }
  }

  // Maneja el clic en el botón de Google
  const handleClickGoogle = async () => {
    try {
      await signIn('google', { callbackUrl: '/loadingsession' }) // Redirige al home después de autenticarse
    } catch (error) {
      console.error('Error en signIn con Google', error)
    }
  }

  return (
    <section className='bg-white mb-10'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            alt='Descripción de la imagen'
            src='/image/logo-viejo-nuevo.jpg'
            layout='fill'
            objectFit='cover'
          />
        </aside>

        <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='w-full max-w-4xl h-auto lg:w-[500px] lg:h-[350px] flex flex-col justify-center mx-auto px-4'>
            <a className='block text-blue-600' href='#'>
              <span className='sr-only'>Home</span>
              <Image
                alt='Descripción de la imagen'
                src='/image/Logo.png'
                width={50}
                height={25}
              />
            </a>
            <div>
              <h1 className='mt-6 text-2xl font-serif text-gray-900 sm:text-3xl md:text-4xl'>
                Bienvenidos a Movimiento Juvenil Peregrino
              </h1>
            </div>
            <p className='mt-4 leading-relaxed text-gray-700 sm:text-2xl md:text-2xl'>
              &quot; Reconociéndonos testigos, ofrecemos nuestros dones a la
              iglesia. &quot;
            </p>

            <form
              onSubmit={handleSubmit}
              className='mt-8 grid grid-cols-6 gap-6'
            >
              <div className='col-span-6'>
                <label
                  htmlFor='Email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='Email'
                  name='email'
                  value={loginUser.email}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, email: e.target.value })
                  }
                  className={`mt-1 w-full p-4 border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm`}
                />
                {errors.email && (
                  <p className='text-red-500 text-sm'>{errors.email}</p>
                )}
              </div>

              <div className='col-span-6 '>
                <label
                  htmlFor='Password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='Password'
                  name='password'
                  value={loginUser.password}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, password: e.target.value })
                  }
                  className={`mt-1 w-full p-4 border ${errors.password ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm mb-4`}
                />

                {errors.password && (
                  <div className='bg-blue-700'>
                    <p className='text-red-500 text-sm mt-1 bg-green-300'>
                      {errors.password}
                    </p>
                  </div>
                )}
              </div>
            </form>
            <div className='flex flex-col items-center gap-4 2-full'>
              <div className='flex flex-row items-center gap-4 justify-center w-full mt-10'>
                <button
                  type='submit'
                  className='inline-block  rounded-md border border-blue-600 bg-blue-600 px-2 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 w-full max-w-xs'
                >
                  Ingresar
                </button>
                <button
                  onClick={handleClickGoogle}
                  type='button'
                  className='flex items-center justify-center w-full max-w-xs px-2 py-3 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100 focus:border-blue-600 transition duration-300 ease-in-out'
                >
                  <FcGoogle className='w-6 h-6' />
                  <span className='ml-3 text-sm font-medium text-gray-700'>
                    Continuar con Google
                  </span>
                </button>
              </div>
              <p className='mt-6 text-sm text-gray-500 sm:mt-0'>
                No tienes una cuenta? Puedes registrarte{' '}
                <Link href={'/register'} className='text-gray-950'>
                  Aquí
                </Link>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

export default LoginForm

/*
'use client'

import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { validateLoginForm } from './validateFormLogin'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

function LoginForm() {
  const [loginUser, setLoginUser] = useState<ILoginUser>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<ILoginError>({})
  const { data: session } = useSession()
  
  console.log('Datos de la sesión:', session);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const validationErrors = validateLoginForm(loginUser)
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulario válido. Enviando datos...')
    } else {
      setErrors(validationErrors)
    }
  }

  const handleClickGoogle = async () => {
    try {
      const result = await signIn('google', { callbackUrl: '/' });
      console.log('Resultado de signIn:', result);
    } catch (error) {
      console.error('Error en signIn con Google', error);
    }
  }
  

useEffect(() => {
  console.log("Datos de sesión:", session);
}, [session]);


  return (
    <section className='bg-white'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            alt='Descripción de la imagen'
            src='/image/logo-viejo-nuevo.jpg'
            layout='fill'
            objectFit='cover'
          />
        </aside>

        <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='w-full max-w-4xl h-auto lg:w-[500px] lg:h-[350px] flex flex-col justify-center mx-auto px-4'>
            <a className='block text-blue-600' href='#'>
              <span className='sr-only'>Home</span>
              <Image
                alt='Descripción de la imagen'
                src='/image/Logo.png'
                width={50}
                height={25}
              />
            </a>
            <div>
              <h1 className='mt-6 text-2xl font-serif text-gray-900 sm:text-3xl md:text-4xl'>
                Bienvenidos a Movimiento Juvenil Peregrino
              </h1>
            </div>
            <p className='mt-4 leading-relaxed text-gray-700 sm:text-2xl md:text-2xl'>
              "Reconociéndonos testigos, ofrecemos nuestros dones a la iglesia".
            </p>

            <form
              onSubmit={handleSubmit}
              className='mt-8 grid grid-cols-6 gap-6'
            >
              <div className='col-span-6'>
                <label
                  htmlFor='Email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='Email'
                  name='email'
                  value={loginUser.email}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, email: e.target.value })
                  }
                  className={`mt-1 w-full p-4 border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm`}
                />
                {errors.email && (
                  <p className='text-red-500 text-sm'>{errors.email}</p>
                )}
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='Password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='Password'
                  name='password'
                  value={loginUser.password}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, password: e.target.value })
                  }
                  className={`mt-1 w-full p-4 border ${errors.password ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm`}
                />
                {errors.password && (
                  <p className='text-red-500 text-sm'>{errors.password}</p>
                )}
              </div>

              <div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
                <button
                  type='submit'
                  className='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'
                >
                  Ingresar
                </button>

                <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                  No tienes una cuenta? Puedes registrarte{' '}
                  <Link href={'/register'} className='text-gray-950'>
                    Aqui
                  </Link>
                  .
                </p>
              </div>
            </form>

            <button
              onClick={handleClickGoogle}
              type='button'
              className='flex items-center justify-center w-full max-w-xs mx-auto mt-6 px-6 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100 focus:border-blue-600 transition duration-300 ease-in-out'
            >
              <FcGoogle className='w-6 h-6' />
              <span className='ml-3 text-sm font-medium text-gray-700'>
                Continuar con Google
              </span>
            </button>
          </div>
        </main>
      </div>
    </section>
  )
}

export default LoginForm
*/

/*

'use client';

import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { validateLoginForm } from './validateFormLogin';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Importa useRouter

function LoginForm() {
  const [loginUser, setLoginUser] = useState<ILoginUser>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ILoginError>({});
  const { data: session, status } = useSession();
  const router = useRouter(); // Inicializa el router

  useEffect(() => {
    if (status === "authenticated") {
      const redirectUrl = session.user.role === "usuario" ? "/" : "/admin";
      router.push(redirectUrl); // Redirige al usuario
    }
  }, [status, session, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateLoginForm(loginUser);
    if (Object.keys(validationErrors).length === 0) {
        const res = await signIn('credentials', {
            email: loginUser.email,
            password: loginUser.password,
            redirect: false,
        });

        if (res?.error) {
            setErrors({ ...errors, general: "Contraseña y/o correo electrónico incorrecto" });
        } else {
            // Redirigir después de iniciar sesión exitosamente
            if (session) {
                router.push(session.user.role === "usuario" ? "/" : "/admin");
            }
        }
    } else {
        setErrors(validationErrors);
    }
};


  const handleClickGoogle = async () => {
    try {
      const result = await signIn('google', { callbackUrl: '/' }); // Cambia '/' por la ruta a la que quieres redirigir
      if (result?.error) {
        console.error('Error en signIn con Google', result.error);
      }
    } catch (error) {
      console.error('Error en signIn con Google', error);
    }
  };

  return (
    <section className='bg-white'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            alt='Descripción de la imagen'
            src='/image/logo-viejo-nuevo.jpg'
            layout='fill'
            objectFit='cover'
          />
        </aside>

        <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='w-full max-w-4xl h-auto lg:w-[500px] lg:h-[350px] flex flex-col justify-center mx-auto px-4'>
            <a className='block text-blue-600' href='#'>
              <span className='sr-only'>Home</span>
              <Image
                alt='Descripción de la imagen'
                src='/image/Logo.png'
                width={50}
                height={25}
              />
            </a>
            <div>
              <h1 className='mt-6 text-2xl font-serif text-gray-900 sm:text-3xl md:text-4xl'>
                Bienvenidos a Movimiento Juvenil Peregrino
              </h1>
            </div>
            <p className='mt-4 leading-relaxed text-gray-700 sm:text-2xl md:text-2xl'>
              "Reconociéndonos testigos, ofrecemos nuestros dones a la iglesia".
            </p>

            <form
              onSubmit={handleSubmit}
              className='mt-8 grid grid-cols-6 gap-6'
            >
              <div className='col-span-6'>
                <label
                  htmlFor='Email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='Email'
                  name='email'
                  value={loginUser.email}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, email: e.target.value })
                  }
                  className={`mt-1 w-full p-4 border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm`}
                />
                {errors.email && (
                  <p className='text-red-500 text-sm'>{errors.email}</p>
                )}
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='Password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='Password'
                  name='password'
                  value={loginUser.password}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, password: e.target.value })
                  }
                  className={`mt-1 w-full p-4 border ${errors.password ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm`}
                />
                {errors.password && (
                  <p className='text-red-500 text-sm'>{errors.password}</p>
                )}
              </div>

              <div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
                <button
                  type='submit'
                  className='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'
                >
                  Ingresar
                </button>

                <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                  No tienes una cuenta? Puedes registrarte{' '}
                  <Link href={'/register'} className='text-gray-950'>
                    Aqui
                  </Link>
                  .
                </p>
              </div>
            </form>

            <button
              onClick={handleClickGoogle}
              type='button'
              className='flex items-center justify-center w-full max-w-xs mx-auto mt-6 px-6 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100 focus:border-blue-600 transition duration-300 ease-in-out'
            >
              <FcGoogle className='w-6 h-6' />
              <span className='ml-3 text-sm font-medium text-gray-700'>
                Continuar con Google
              </span>
            </button>
          </div>
        </main>
      </div>
    </section>
  )
}

export default LoginForm
*/
