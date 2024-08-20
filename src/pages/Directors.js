import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
function Directors() {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then((response) => response.json())
      .then((directorsData) => setDirectors(directorsData));
  }, []);

  const displayDirectors = directors.map((director) => {
    const displayDirectorMovies = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>;
    });
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>{displayDirectorMovies}</ul>
      </article>
    );
  });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {displayDirectors}
      </main>
    </>
  );
}

export default Directors;