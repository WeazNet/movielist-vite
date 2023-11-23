import { Link } from "react-router-dom";
import { HeartDiv } from "./HeartDiv";
import { RateDiv } from "./RateDiv";
import { Card } from "../../../design/atoms/Card";
import { BASE_PATH_IMAGE, PATH_IMAGE_BLANK } from "../../../services/utils";
import { Movie } from "../../../interfaces";
import { motion } from "framer-motion";

export const MovieCard = ({
  movie,
  favoriteMovies,
  addMovieToFavorite,
  removeMovieToFavorite,
  withHeartDiv,
  withRateDiv,
}: {
  movie: Movie;
  favoriteMovies: Movie[];
  addMovieToFavorite: (movie: Movie) => void;
  removeMovieToFavorite: (movie: Movie) => void;
  withHeartDiv: boolean;
  withRateDiv: boolean;
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      key={movie.id}
      className="relative hover:scale-105 w-min-content min-h-full flex justify-center items-center bg-[rgba(0,0,0,.4)] rounded"
    >
      {withHeartDiv && (
        <HeartDiv
          movie={movie}
          favoriteMovies={favoriteMovies}
          addMovieToFavorite={addMovieToFavorite}
          removeMovieToFavorite={removeMovieToFavorite}
        />
      )}
      {withRateDiv && <RateDiv vote_average={movie.vote_average} />}

      <Link title={movie.title} to={`/movie/${movie.id}`}>
        <Card
          imageSrc={
            movie.poster_path
              ? BASE_PATH_IMAGE + movie.poster_path
              : PATH_IMAGE_BLANK
          }
          title={movie.title}
          id={movie.id}
        />
      </Link>
    </motion.div>
  );
};
