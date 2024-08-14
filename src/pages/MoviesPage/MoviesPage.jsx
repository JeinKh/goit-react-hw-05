import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/app";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const filterValue = searchParams.get("query") ?? "";
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    fetchMovies().then((data) => setMovies(data));
  }, []);
  const handleChangeFilter = (newValue) => {
    if (!newValue) {
      return setSearchParams({});
    }
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  const FilteredData = movies.filter(
    (item) =>
      item.firstName.includes(filterValue.toLowerCase()) ||
      item.lastName.includes(filterValue.toLowerCase())
  );
  return (
    <div>
      <SearchBar
        handleChangeFilter={handleChangeFilter}
        filterValue={filterValue}
      />
      <MovieList movies={FilteredData} />
    </div>
  );
};

export default MoviesPage;
