import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;  // Asegúrate de que esta línea esté presente
  }

  interface JWT {
    accessToken?: string;  // Asegúrate de que esta línea esté presente
  }
}
