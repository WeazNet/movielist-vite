import { Link } from "react-router-dom";
import { HeartDiv } from "./HeartDiv";
import { RateDiv } from "./RateDiv";
import { Card } from "../../../design/atoms/Card";
import { BASE_PATH_IMAGE } from "../../../services/utils";
import { Movie } from "../../../interfaces";

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
    <div
      key={movie.id}
      className="relative hover:scale-105 w-min-content min-h-full flex items-center bg-[rgba(0,0,0,.4)] rounded"
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
              : "https://placehold.co/500x750?text=?&font=roboto"
          }
          title={movie.title}
          id={movie.id}
        />
      </Link>
    </div>
  );
};