import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCymeEm-ainUiEugXxWzy2OOmqp9sj1HV8",
  authDomain: "pruebarokio.firebaseapp.com",
  projectId: "pruebarokio",
  storageBucket: "pruebarokio.firebasestorage.app",
  messagingSenderId: "526681666524",
  appId: "1:526681666524:web:645a2c6094d6da48f81519",
  measurementId: "G-V0N5S7T1HQ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);