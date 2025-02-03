export interface AuthContext {
  isLoggedIn: boolean;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  user: User | null;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type SignInData = {
  email: string;
  password: string;
};

export type SignUpData = SignInData & {
  name: string;
  avatar?: string;
};
