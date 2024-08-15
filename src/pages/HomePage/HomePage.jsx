import { useEffect } from "react";
import { useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    try {
      const getData = async () => {
        const data = await fetchTrendingMovies();
        setMovies(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};

export default HomePage;
