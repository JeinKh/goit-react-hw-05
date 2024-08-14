import axios from "axios";

// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzAyYWRmNzg5ZjdkMGQ1NTRlNDg4OGJkMzBmYTU3YSIsIm5iZiI6MTcyMzE5MTk3Ni43NjMwNDcsInN1YiI6IjY2YjQ3NzdhZThmODM2NzM1MjljODI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DA1St7ZF8Yi86cNMEEAM3NzFbnoxhHsTGIqf9wHBFF0",
//   },
// };

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const fetchMovies = async () => {
  const response = await axios.get("https://api.themoviedb.org/3/search/movie");
  return response.data.movie;
};

export const fetchMoviesById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie/${id}`
  );
  return response.data;
};

export const fetchReviewsById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/reviews/${id}`
  );
  return response.data.reviews;
};
