import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { loginSchema } from "../schemas/LoginSchema";
import Boton from "../components/Boton";
import { BotonGradiente } from "../components/BotonGradiente";

function Login() {
    const { usuario, rol } = useAuth()
    const navigate = useNavigate()
    const [errorAuth, setErrorAuth] = useState(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema)
    })

    useEffect(() => {
        if (usuario && rol) navigate(`/${rol}`)
    }, [usuario, rol, navigate])

    async function onSubmit(datos) {
        setErrorAuth(null)

        try {
            await login(datos.email, datos.password)
        } catch (e) {
            setErrorAuth("Email o contraseña inválidos")
        }
    }

    function toggleTema(){
        document.documentElement.classList.toggle("dark")
    }

    return (
        <form
            className="bg-fondo flex flex-col items-center justify-center gap-8"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="m-2 text-center text-3xl font-bold text-texto hover:text-red-800">
                Iniciar sesión
            </h1>

            <div>
                <label>Email</label>

                <input
                    type="email"
                    {...register("email")}
                />

                {errors.email && (
                    <p>{errors.email.message}</p>
                )}
            </div>

            <div>
                <label>Contraseña</label>

                <input
                    type="password"
                    {...register("password")}
                />

                {errors.password && (
                    <p>{errors.password.message}</p>
                )}
            </div>

            <div className="flex items-center gap-4">
                <Boton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Iniciando..." : "Iniciar sesión"}
                </Boton>

                <button type ="button" onClick={toggleTema}>
                    Cambiar Tema
                </button>

                <BotonGradiente
                    type="button"
                    onClick={() => navigate("/registro")}
                >
                    Registrarse
                </BotonGradiente>
            </div>

            {errorAuth && <p>{errorAuth}</p>}
        </form>
    )
}

export default Login