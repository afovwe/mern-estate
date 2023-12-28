// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fd31c.firebaseapp.com",
  projectId: "mern-estate-fd31c",
  storageBucket: "mern-estate-fd31c.appspot.com",
  messagingSenderId: "841931189262",
  appId: "1:841931189262:web:a03c082a2d88e41069e05f",
  measurementId: "G-NBH5M78E6J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
