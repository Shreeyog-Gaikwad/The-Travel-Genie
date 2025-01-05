// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage'


const firebaseConfig = {
  apiKey: "AIzaSyD4FatOH3y2_v7Qrh5tWU4Tv1qpF1nuRBU",
  authDomain: "travel-genie-bfa10.firebaseapp.com",
  projectId: "travel-genie-bfa10",
  storageBucket: "travel-genie-bfa10.firebasestorage.app",
  messagingSenderId: "196242677831",
  appId: "1:196242677831:web:cb0972fc4cdee868899162",
  measurementId: "G-FP4Y7LGLCX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);

