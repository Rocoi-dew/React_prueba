import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { buscarRolPorUid } from "../services/usuarioService";

const AuthContext = createContext()

export function AuthProvider ({children}){
    const [usuario, setUsuario] = useState(null)
    const [rol, setRol] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async(user) => {
            setUsuario(user)
            if (user){
                const rolEncontrado = await buscarRolPorUid(user.uid)
                setRol(rolEncontrado)
            }else{
                setRol(null)
            }
            setCargando(false)
        })
        return () => unsub()
    }, [])

    return(
        <AuthContext.Provider value = {{ usuario, rol, cargando }}>
            {children} 
        </AuthContext.Provider>
    )
}
export function useAuth(){
    return useContext(AuthContext)
}