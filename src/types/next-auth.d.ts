

declare global {
  namespace NodeJS {
    interface Global {
      session: {
        accessToken: string;
        providerAccountId: string;
      };
    }
  }
}
