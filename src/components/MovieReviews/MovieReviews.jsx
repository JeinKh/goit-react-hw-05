import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviewsById(params.movieId).then((data) => setReviews(data.results));
  }, [params.movieId]);
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
