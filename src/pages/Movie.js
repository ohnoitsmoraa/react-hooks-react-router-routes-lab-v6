import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((movie) => setMovie(movie));
  }, [id]);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <article>
          <h1>{movie.title}</h1>
          <p>{movie.time}</p>
        </article>
      </main>
    </>
  );
}

export default Movie;