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
      if (account) {
        console.log('JWT Callback:');
        console.log('Token:', token);
        console.log('Account:', account);
        
        (token as any).accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
    
      (session as any).accessToken = (token as any).accessToken;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
