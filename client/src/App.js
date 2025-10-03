import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  // Fetch movies from Flask API
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
