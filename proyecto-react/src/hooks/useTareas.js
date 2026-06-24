import { useState, useEffect } from "react";

export function useTareas (){
    const [tareas, setTareas] = useState([])


  useEffect(() => {
    const pendientes = tareas.filter ((tareo) =>!tareo.realizada).length
    document.title = `Tareas pendientes (${pendientes})`
  }, [tareas])


  function agregarTarea(texto) {
    const nueva = { id: Date.now(), texto: texto, realizada: false,};
    setTareas((prev) => [...prev, nueva]);
  }

  function eliminar(id) {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id));
  }

  function cambiarEstado(id) {
    setTareas((prev) =>
      prev.map((tarea) =>
        tarea.id === id
          ? { ...tarea, realizada: !tarea.realizada }
          : tarea
      ))
  }
  return {tareas, agregarTarea, eliminar, cambiarEstado}
}