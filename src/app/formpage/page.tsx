'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Provider } from '@/components/provider';

function SignupForm() {
  const port = process.env.NEXT_PUBLIC_APP_API_PORT;
  const router = useRouter();
  const { userSession } = useAuth();

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
      phone: '',
      address: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(
          /[A-Z]/,
          'La contraseña debe contener al menos una letra mayuscula',
        )
        .matches(/[0-9]/, 'La contraseña debe contener al menos un numero')
        .required('La contraseña es obligatoria'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
        .required('Debe confirmar su contraseña'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'El teléfono debe contener solo números')
        .min(10, 'El teléfono debe tener al menos 10 dígitos')
        .required('El teléfono es obligatorio'),
      address: Yup.string().required('La dirección es obligatoasdaria'),
    }),

    onSubmit: async (values) => {
      try {
        const formData = {
          email: userSession?.email,
          providerAcountId: userSession?.providerAcountId,
          ...values,
        };
        const response = await fetch(
          `http://localhost:${port}/auth/auth0/completeregister`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          },
        );

        if (response.status === 201) {
          const data = await response.json();
          console.log('User Information:', data);
          alert('Te has registrado con éxito');
          router.push('/');
        } else {
          alert('Error en el registro');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error en el registro');
      }
    },
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-blue-600 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-600 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirmar Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="**********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-600 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>

        <div className="mb-6">
          <label
            className="block text-blue-600 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Dirección
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="address"
            id="address"
            placeholder="Dirección"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.address}
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
