//TODO: crea un componente FichaProyecto que muestre el nombre del proyecto, cuántas tareas hay completadas, el porcentaje de progreso y un mensaje distinto según si está al 100% o no.
function FichaProyecto({completedTasks, totalTasks, projectName}) {
   
    const porcentajeProgreso = (completedTasks / totalTasks) * 100;   

    return (
        <>
       
           <h3> {projectName}</h3>
           <p>Porcentaje de progreso: {porcentajeProgreso}%</p>
           <p>Estado: <strong> {porcentajeProgreso >= 60 ? " Apto" : " No apto"} </strong></p>
    
        </>
    )
}

export default FichaProyecto;