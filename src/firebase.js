// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDFxd-MeLfCDG9R9wbNjzG5DIXcT9hjbg",
  authDomain: "portfolio-d-main.firebaseapp.com",
  projectId: "portfolio-d-main",
  storageBucket: "portfolio-d-main.firebasestorage.app",
  messagingSenderId: "628114766389",
  appId: "1:628114766389:web:b3fbf610e52fe04fb58f7c",
  measurementId: "G-3S19TVD090"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
