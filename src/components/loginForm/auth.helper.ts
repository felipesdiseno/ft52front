
const handleUserAuthentication = (session: CustomSession) => {
  // Aquí realizas la lógica para enviar los datos al backend
  const userData = {
    providerAccountId: session.providerAccountId,
    email: session.user?.email,
    name: session.user?.name,
    accessToken: session.accessToken,
  };

  console.log("Datos del usuario para el backend:", userData);
  
  // Aquí puedes realizar la petición a tu backend
  fetch("/api/your-backend-endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(data => console.log("Respuesta del backend:", data))
    .catch(error => console.error("Error al enviar los datos al backend:", error));
};

export default handleUserAuthentication;