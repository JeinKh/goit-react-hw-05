import { Link, useLocation } from "react-router-dom";

const MovieList = (movies = []) => {
  const location = useLocation();
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.movie_id}>
            <Link to={movie_id.toString()} state={location}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
