import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage'


const firebaseConfig = {
  apiKey: "AIzaSyBt2h64t3ixA_JOnqpfopANhNVURNdDwy4",
  authDomain: "react-native-apps-5603c.firebaseapp.com",
  projectId: "react-native-apps-5603c",
  storageBucket: "react-native-apps-5603c.firebasestorage.app",
  messagingSenderId: "1024160893161",
  appId: "1:1024160893161:web:72b1905e63dff629d54878",
  measurementId: "G-90VNYPRH1K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);

