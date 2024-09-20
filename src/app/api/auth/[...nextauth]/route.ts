import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Si hay una cuenta, agregamos el accessToken y el providerAccountId al token
      if (account) {
        token.accessToken = account.access_token; // Agrega el accessToken
        token.providerAccountId = account.providerAccountId; // Agrega el providerAccountId
      }
      return token;
    },
    async session({ session, token }) {
      // Creamos un objeto personalizado con los datos de la sesión
      const customSession = {
        ...session,
        accessToken: token?.accessToken, // Agrega el accessToken
        providerAccountId: token?.providerAccountId, // Agrega el providerAccountId
      };
      
      // Retornamos el objeto personalizado para enviar al backend
      return customSession;
    }
  }
});

export { handler as GET, handler as POST };
