import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzAyYWRmNzg5ZjdkMGQ1NTRlNDg4OGJkMzBmYTU3YSIsIm5iZiI6MTcyMzE5MTk3Ni43NjMwNDcsInN1YiI6IjY2YjQ3NzdhZThmODM2NzM1MjljODI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DA1St7ZF8Yi86cNMEEAM3NzFbnoxhHsTGIqf9wHBFF0";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.results;
};

export const fetchSearchMovies = async (searchValue) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        query: searchValue,
      },
    }
  );
  return response.data.results;
};

export const fetchMoviesById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const fetchCastById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.cast;
};

export const fetchReviewsById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
