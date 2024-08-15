import { Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage/HomePage";
// import MoviesPage from "../pages/MoviesPage/MoviesPage";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import Navigation from "./Navigation/Navigation";
// import MovieReviews from "./MovieReviews/MovieReviews";
// import MovieCast from "./MovieCast/MovieCast";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
