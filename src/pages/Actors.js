import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
function Actors() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((response) => response.json())
      .then((actorsData) => setActors(actorsData));
  }, []);

  const displayActors = actors.map((actor) => {
    const displayActorsMovies = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>;
    });
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>{displayActorsMovies}</ul>
      </article>
    );
  });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {displayActors}
      </main>
    </>
  );
}

export default Actors;