import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
const MovieList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <div className={s.container}>
      <h2>Movies</h2>
      <ul className={s.wrapper}>
        {movies.map((movie) => (
          <li className={s.link} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {" "}
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <p className={s.title}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
