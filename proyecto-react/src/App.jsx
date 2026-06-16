import Header from "./components/Header.jsx"
import TareaItem from "./components/TareaItem.jsx"
import Pie from "./components/Pie.jsx"
import FichaProyecto from "./components/FichaProyecto.jsx"
import { useState } from "react";

function App() {

  const modulos = 4;
  const modulosRealizados = 3;
  const [listaTareas, setListaTareas] = useState([
    { id: 1, texto: "Tarea 1 ", realizada: true },
    { id: 2, texto: "Tarea 2 ", realizada: true },
    { id: 3, texto: "Tarea 3 ", realizada: false }
  ])

  function CambiarEstado(id) {

    setListaTareas(listaTareas.map((tarea) =>
      tarea.id === id
        ? { ...tarea, realizada: !tarea.realizada }
        : tarea
    ))
  }



  const proyectos = [
    { id: 1, projectName: 'AprenTIC Full Stack', completedTasks: 4, totalTasks: 4 },
    { id: 2, projectName: 'TaskFlow API', completedTasks: 3, totalTasks: 8 },
    { id: 3, projectName: 'Portfolio personal', completedTasks: 0, totalTasks: 5 }
  ]

  return (
    // Elemento raíz
    <>
      <Header />

      <p>Son {modulos} modulos totales y me queda {modulos - modulosRealizados} modulo</p>



      {proyectos.map(proyecto => {
        return(
        <FichaProyecto
          key={proyecto.id}
          projectName={proyecto.projectName}
          completedTasks={proyecto.completedTasks}
          totalTasks={proyecto.totalTasks} />)
      })
      }
      {listaTareas.map(tarea => {
        return(
        <TareaItem
          key={tarea.id}
          texto={tarea.texto}
          realizada={tarea.realizada}
          onToggle={() => CambiarEstado(tarea.id)} />)
      })}

      <Pie />
    </>
  )
}
export default App