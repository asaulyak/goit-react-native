import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { AuthContext } from '@/common/auth/auth.types';
import { user } from '@/features/posts/posts.data';

const authContext = createContext<AuthContext>({
  isLoggedIn: false,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {}
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const value = useProvideAuth();

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);

export const useProvideAuth = (): AuthContext => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = () => setIsLoggedIn(true);

  const signOut = () => setIsLoggedIn(false);

  const signUp = () => signIn();

  return { isLoggedIn, signIn, signOut, signUp, user };
};
