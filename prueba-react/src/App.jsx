import { useAuth } from "./context/AuthContext"
import { Routes, Route, Router } from "react-router";
import Login from "./pages/Login";
import PanelAdmin from "./pages/PanelAdmin";
import PanelProfesor from "./pages/PanelProfesor";
import PanelAlumno from "./pages/PanelAlumno";


function App() {
  const {cargando} = useAuth()

  if (cargando) return <p>Cargando...</p>
    
    return( 
    <Routes>
      <Route path="/" element={<Login  />} />
      <Route path="/admin" element={<PanelAdmin />} />
      <Route path="/alumno" element={<PanelAlumno />} />
      <Route path="/profesor" element={<PanelProfesor />} />
      <Route path="*" element={<h1>Página not found</h1>} />
    </Routes>

  );
}

export default App;