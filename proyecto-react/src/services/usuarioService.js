import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const COLECCIONES = [
  { coleccion: "admins", rol: "admin" },
  { coleccion: "profesores", rol: "profesor" },
  { coleccion: "alumnos", rol: "alumno" },
];

export async function buscarRolPorUid(uid) {
  for (const { coleccion, rol } of COLECCIONES) {
    const referencia = doc(db, coleccion, uid);
    const snap = await getDoc(referencia);

    if (snap.exists()) {
      return rol;
    }
  }

  return null;
}