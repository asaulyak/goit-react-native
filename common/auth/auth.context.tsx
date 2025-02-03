import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext, SignInData, SignUpData } from '@/common/auth/auth.types';
import { auth, db } from '@/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as signOutFireBase,
  getAuth
} from '@firebase/auth';
import { User } from '@/features/posts/types';

const authContext = createContext<AuthContext>({
  isLoggedIn: false,
  signIn: async () => {},
  signOut: async () => {},
  signUp: async () => {},
  user: null
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const value = useProvideAuth();

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);

const getCurrUser = async () => {
  await auth.authStateReady();

  const currentUser = auth.currentUser;

  if (!currentUser) {
    return null;
  }

  const user = await getDoc(doc(db, 'users', currentUser.uid));

  return user.data();
};

export const useProvideAuth = (): AuthContext => {
  const [user, setUser] = useState<User | null>();

  const isLoggedIn = useMemo(() => !!user, [user]);

  useEffect(() => {
    getCurrUser().then(user => setUser(user));
  }, []);

  const signIn = async ({ email, password }: SignInData) => {
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);

      const docRef = doc(db, 'users', credentials.user.uid);
      const docSnap = await getDoc(docRef);

      setUser(docSnap.data());
    } catch (error) {
      console.log('sign in error', error);
    }
  };

  const signOut = async () => {
    await signOutFireBase(auth);

    setUser(null);
  };

  const signUp = async ({ email, password, name, avatar }: SignUpData) => {
    try {
      const signUpResult = await createUserWithEmailAndPassword(auth, email, password);

      const { uid } = signUpResult.user;
      const userData = { id: uid, email, name, avatar: avatar ?? null };
      await setDoc(doc(db, 'users', uid), userData, { merge: true });

      setUser(userData);
    } catch (error) {
      console.log('sign up error', error);
    }
  };

  return { isLoggedIn, signIn, signOut, signUp, user };
};
