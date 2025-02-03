import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'goit-9fc5c.firebaseapp.com',
  projectId: 'goit-9fc5c',
  storageBucket: 'goit-9fc5c.firebasestorage.app'
};

// let app = initializeApp(firebaseConfig);

// let auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

let app;
let auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });
  } catch (err) {
    console.log('error initializing');
  }
} else {

}
app = getApp();

// console.log('app', app);

auth = getAuth(app);

console.log('auth', auth);

const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };


