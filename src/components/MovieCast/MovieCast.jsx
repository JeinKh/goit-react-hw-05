import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import { useEffect, useState } from "react";
import s from "./MovieCast.module.css";
const MovieCast = () => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const params = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCastById(params.movieId).then((data) => setCast(data));
  }, [params.movieId]);
  return (
    <div>
      <ul className={s.wrapper}>
        {cast.map((actor) => (
          <li className={s.link} key={actor.id}>
            <img
              className={s.img}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
            />
            <p>
              {actor.name} {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
