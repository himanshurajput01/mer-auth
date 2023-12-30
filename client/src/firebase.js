// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-70d12.firebaseapp.com",
  projectId: "mern-auth-70d12",
  storageBucket: "mern-auth-70d12.appspot.com",
  messagingSenderId: "1003772062091",
  appId: "1:1003772062091:web:c898214d72db577793678e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);