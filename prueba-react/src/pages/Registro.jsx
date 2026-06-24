import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registroSchema } from "../schemas/registroSchema";

function Registro(){
    const { 
        register, handleSubmit, 
        formState : {errors, isValid}} = 
        useForm({
            resolver: zodResolver(registroSchema),
            mode: 'onChange',
        })

    function onSubmit(datos){
        console.log('Datos: ' ,datos)

    }

    return(
        <form onSubmit ={handleSubmit(onSubmit)}>
        <div>
        
            <label>Nombre</label>
            <input {...register('nombre')}/>
            {errors.nombre && <p> {errors.nombre.message}</p>}
        </div>

        <div>
            <label>Email</label>
            <input type= "email" {...register('email')}/>
            {errors.email && <p> {errors.email.message}</p>}
        </div>

        <div>
            <label>Contraseña</label>
            <input type= "password" {...register('password')}/>
            {errors.password && <p> {errors.password.message}</p>}
        </div>

        <div>
            <label>Confirmar Contraseña</label>
            <input type="password" {...register("confirmar")} />
            {errors.confirmar && <p>{errors.confirmar.message}</p>}
        </div>

        <button type = "submit" disabled ={!isValid}>Crear usuario</button>
        </form>
    )
}

export default Registro