import { createContext, useContext, useEffect, useState } from "react";

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [oscuro, setOscuro] = useState(false);

  function alternarTema() {
    setOscuro((prev) => !prev);
  }

  useEffect(() => {
    console.log(oscuro ? "darkMode" : "lightMode");

    document.body.className = oscuro ? "darkMode" : "lightMode";
  }, [oscuro]);

  return (
    <TemaContext.Provider value={{ alternarTema, oscuro }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}