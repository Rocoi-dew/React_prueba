// TODO 2: que devuelva un <li> con un <span> (texto de la tarea) y un <strong> (estado)

function TareaItem ({texto, realizada = false, onToggle}) {

    return (
    <> 
      
        <li onClick = {onToggle}>
          <span> {texto} </span>
          <strong> {realizada
          ? "Completada" 
          : "Pendiente" } </strong>
        </li>
    
    </>
  )
}


export default TareaItem;