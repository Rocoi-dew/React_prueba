import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import BotonTema from '../components/BotonTema'

const KEY = import.meta.env.VITE_TMDB_KEY
const BASE = 'https://api.themoviedb.org/3'
const IMG = 'https://image.tmdb.org/t/p/w200'


function Detalle() {
  const { id } = useParams()
  const [pelicula, setPelicula] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function cargar() {
      const res = await fetch(`${BASE}/movie/${id}?api_key=${KEY}&language=es-ES`)
      setPelicula(await res.json())
    }
    cargar()
  }, [id])

  if (!pelicula) return <p>Cargando...</p>

  return (
    <>
      <h1>{pelicula.title}</h1>
      {pelicula.poster_path && <img src={IMG + pelicula.poster_path} alt={pelicula.title} />}
      <p>{pelicula.overview}</p>
      <strong>⭐ {pelicula.vote_average}</strong>
      <button onClick = {() => navigate(-1)}>Volver atrás</button>
      <BotonTema/>
    </>
  )
}

export default Detalle
