import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgs1YBu71ZZ0uqvmnNX8TzH8Jmmm9DFvY",
  authDomain: "appnoticiasv2.firebaseapp.com",
  projectId: "appnoticiasv2",
  storageBucket: "appnoticiasv2.firebasestorage.app",
  messagingSenderId: "891126151169",
  appId: "1:891126151169:web:0ebb5d26064be187bd2800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializar y exportar servicios
export const auth = getAuth(app);  // autenticar
export const db = getFirestore(app); // base de datos
export const storage = getStorage(app); // archivos
export { app };