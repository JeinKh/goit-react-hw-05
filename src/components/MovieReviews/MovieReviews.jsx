import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/app";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviewsById(params.movieId).then((data) => setReviews(data));
  }, [params.movieId]);
  return <div>{reviews}</div>;
};

export default MovieReviews;
