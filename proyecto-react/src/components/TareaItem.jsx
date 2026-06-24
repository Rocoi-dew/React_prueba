function TareaItem({ texto, realizada = false, onToggle, onDelete }) {
  const progresoTarea = realizada ? 100 : 0;

  return (
    <li>
      <div>
        <span>{texto}</span>

        <strong onClick={onToggle}>
          {realizada ? "Completada" : "Pendiente"}
        </strong>

        <button onClick={onDelete}>Eliminar</button>
      </div>

      <div>
        <progress value={progresoTarea} max="100"></progress>
        <span>{progresoTarea}%</span>
      </div>
    </li>
  );
}

export default TareaItem