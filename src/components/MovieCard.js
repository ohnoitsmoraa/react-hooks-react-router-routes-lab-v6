import { Link } from 'react-router-dom';

function MovieCard({ title, id }) {
  return (
    <>
      <h2>{title}</h2>
      <button className="movie-button">
        <Link to={`/movie/${id}`}>View Info</Link>
      </button>
    </>
  );
}

export default MovieCard;