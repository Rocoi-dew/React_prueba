import { Link } from 'react-router'

const IMG = 'https://image.tmdb.org/t/p/w200'

function PeliculaCard({ pelicula }) {
  return (
    <li>
      {pelicula.poster_path
        ? <img src={IMG + pelicula.poster_path} alt={pelicula.title} />
        : <span>Sin póster</span>}
      <h3>
        <Link to = {`/pelicula/${pelicula.id}`}>{pelicula.title}</Link>
      </h3>
      <p>{pelicula.release_date ? pelicula.release_date.slice(0, 4) : '—'}</p>
    </li>
  )
}

export default PeliculaCard