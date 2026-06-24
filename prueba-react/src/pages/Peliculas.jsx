import { useEffect, useState } from "react"
import PeliculasCard from "../components/PeliculasCard"
import BotonTema from "../components/BotonTema"

const KEY = import.meta.env.VITE_TMDB_KEY
const BASE = "https://api.themoviedb.org/3"

function Peliculas() {
  const [peliculas, setPeliculas] = useState([])
  const [texto, setTexto] = useState("")
  const [busqueda, setBusqueda] = useState("")
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function cargarPeliculas() {
      try {
        setCargando(true)
        setError(null)

        const url =
          busqueda.trim() === ""
            ? `${BASE}/movie/popular?api_key=${KEY}&language=es-ES`
            : `${BASE}/search/movie?api_key=${KEY}&language=es-ES&query=${encodeURIComponent(busqueda)}`

        const respuesta = await fetch(url)

        if (!respuesta.ok) {
          const datosError = await respuesta.json()

          throw new Error(
            datosError.status_message ||  "No se pudieron cargar las películas")
        }

        const datos = await respuesta.json()

        setPeliculas(datos.results || [])
      } catch (error) {
        console.error(error)
        setError(error.message)
        setPeliculas([])
      } finally {
        setCargando(false)
      }
    }

    cargarPeliculas()
  }, [busqueda])

  function buscarPeliculas(evento) {
    evento.preventDefault()

    setBusqueda(texto.trim())
  }

  function mostrarPopulares() {
    setTexto("")
    setBusqueda("")
  }

  return (
    <main>
      <h1>Películas</h1>

      <form onSubmit={buscarPeliculas}>
        <input
          type="text"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          placeholder="Busca una película"
        />

        <button type="submit">Buscar</button>
        <BotonTema/>
      </form>

      {cargando && <p>Cargando películas...</p>}

      {error && <p>Error: {error}</p>}

      {!cargando && !error && peliculas.length === 0 && (
        <p>No se encontraron películas.</p>
      )}

      <section className="peliculas-container">
        {!cargando &&
          !error &&
          peliculas.map((pelicula) => (
            <PeliculasCard key={pelicula.id} pelicula={pelicula} />
          ))}
      </section>
    </main>
  )
}

export default Peliculas