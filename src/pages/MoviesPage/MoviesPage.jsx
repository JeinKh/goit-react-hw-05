import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovies } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const filterValue = searchParams.get("query") ?? "";
  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmit = (newValue) => {
    setSearchParams({ query: newValue });
  };
  useEffect(() => {
    fetchSearchMovies().then((data) => setMovies(data));
  }, []);
  // const handleChangeFilter = (newValue) => {
  //   if (!newValue) {
  //     return setSearchParams({});
  //   }
  //   searchParams.set("query", newValue);
  //   setSearchParams(searchParams);
  // };

  // const FilteredData = movies.filter(
  //   (item) =>
  //     item.firstName.includes(filterValue.toLowerCase()) ||
  //     item.lastName.includes(filterValue.toLowerCase())
  // );
  return (
    <div>
      <SearchBar onSubmit={onSubmit} filterValue={filterValue} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
