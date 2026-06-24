import { useState } from "react";

function NuevaTarea({ onAdd }) {
  const [texto, setTexto] = useState("");

  function enviar(e) {
    e.preventDefault();

    if (texto.trim() === "") return;

    onAdd(texto);

    setTexto("");
  }

  return (
    <form onSubmit={enviar}>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />

      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default NuevaTarea;