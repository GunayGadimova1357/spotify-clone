// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqnXNl_j4UPAJYi1NQnXU4iQR1Q1fPddI",
  authDomain: "spotifyclone-ee114.firebaseapp.com",
  projectId: "spotifyclone-ee114",
  storageBucket: "spotifyclone-ee114.firebasestorage.app",
  messagingSenderId: "1018237321155",
  appId: "1:1018237321155:web:0066556db9cfd1dec10776",
  measurementId: "G-N6SECSBDTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);