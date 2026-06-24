import { useEffect } from "react"

export function useProgreso(tareas) {
    const total = tareas.length
    const completadas = tareas.filter((completada) => completada.realizada).length
    const porcentaje = total === 0
    ? 0 
     : Math.round((completadas / total) * 100)

       useEffect(() =>{
        if (porcentaje === 100){
        }
        }, [porcentaje])

     return {total, completadas, porcentaje}
 
}