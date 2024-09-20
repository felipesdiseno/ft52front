interface ILoginUser {
    email: string;
    password: string;
}
interface ILoginError{
    email?: string;
    password?: string;
}

interface CustomSession {
    user?: {
      name?: string | null;
      email?: string | null;
    };
    accessToken?: string;
    providerAccountId?: string;
  }