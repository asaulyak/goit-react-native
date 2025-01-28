export interface AuthContext {
  isLoggedIn: boolean;
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
  user?: User
}

interface User {
  name: string;
  email: string;
  avatar: string;
}
