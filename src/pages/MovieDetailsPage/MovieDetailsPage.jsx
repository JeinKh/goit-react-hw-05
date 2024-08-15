import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMoviesById } from "../../services/app";

const MovieDetailsPage = () => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/movies");
  useEffect(() => {
    fetchMoviesById(params.movieId).then((data) => setMovie(data));
  }, [params.movieId]);
  if (!movie) {
    return <h2>Loading ...</h2>;
  }
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultImg;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getUTCFullYear()
    : "N/A";

  const genres = movie.genres
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "N/A";

  const score = movie.vote_average
    ? (movie.vote_average * 10).toFixed(0)
    : "N/A";
  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
      {movie}
      <div>
        <img src={posterUrl} alt={movie.title} />
        <div>
          <h2>
            {movie.title}({releaseYear})
          </h2>
          <p>User Score: {score}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
