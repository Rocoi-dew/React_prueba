import { useTema } from "../context/TemaContext";

function BotonTema() {
  const { oscuro, alternarTema } = useTema();

  return (
    <button type="button" onClick={alternarTema}>
      {oscuro ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}

export default BotonTema;