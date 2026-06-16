
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAuth } from "firebase/Auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXS-KqQAU6AFX1O6P--m0f50rQ0asBH_8",
  authDomain: "pruebaproyectofinal-f91f8.firebaseapp.com",
  projectId: "pruebaproyectofinal-f91f8",
  storageBucket: "pruebaproyectofinal-f91f8.firebasestorage.app",
  messagingSenderId: "314121538089",
  appId: "1:314121538089:web:ac5a3f3b187f809785ea38"
};

const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);
export const auth = getAuth(app);