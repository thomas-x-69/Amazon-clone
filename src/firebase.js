import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAC4YqfxrF-rfm7fPCY52p4ewIgcjzOL4U",
  authDomain: "clone-bc0e9.firebaseapp.com",
  projectId: "clone-bc0e9",
  storageBucket: "clone-bc0e9.appspot.com",
  messagingSenderId: "909436295168",
  appId: "1:909436295168:web:f30040987a5a4bf23b60e5",
  measurementId: "G-EXRLCSRRBW"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();