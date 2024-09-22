const API_URL_USER_POST = process.env.NEXT_PUBLIC_API_URL_POST_USER_AUT;

interface IUserObject {
  providerAccountId: string;
  email: string;
  name: string;
  accessToken: string;
  image: string;
}

export const postUserSessionData = async (userObject: IUserObject) => {
  try {
    const response = await fetch("http://localhost:3003/auth/auth0/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    });

    // Asegúrate de manejar la respuesta correctamente
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    const data = await response.json(); // Obtén los datos de la respuesta
    console.log('Datos enviados exitosamente al backend.', data);
    return data; // Retorna los datos del backend
  } catch (error) {
    console.error('Error al enviar los datos al backend:', error);
    throw error; // Lanza el error para que se maneje en el componente
  }
};
