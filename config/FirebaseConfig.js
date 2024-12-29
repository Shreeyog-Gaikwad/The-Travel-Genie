// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const auth = getAuth(app);
