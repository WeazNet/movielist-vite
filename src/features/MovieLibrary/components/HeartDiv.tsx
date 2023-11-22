import { GoHeart, GoHeartFill } from "react-icons/go";
import { Movie } from "../../../interfaces";

export const HeartDiv = ({
  movie,
  favoriteMovies,
  removeMovieToFavorite,
  addMovieToFavorite,
}: {
  movie: Movie;
  favoriteMovies: Movie[],
  removeMovieToFavorite: (movie: Movie) => void;
  addMovieToFavorite: (movie: Movie) => void;
}) => {

  return (
    <div className="absolute cursor-pointer text-white hover:text-yellow-200 z-40 right-[.4em] top-[.4em] text-2xl sm:text-4xl transition ease-in-out">
      {favoriteMovies &&
        favoriteMovies?.filter((oldMovie) => oldMovie.id == movie.id).length !=
        0 ? (
        <GoHeartFill
          className="text-yellow-400 fill-yellow-200 hover:animate-heartbeat"
          onClick={() => removeMovieToFavorite(movie)}
        />
      ) : (
        <GoHeart
          className="hover:animate-heartbeat"
          onClick={() => addMovieToFavorite(movie)}
        />
      )}
    </div>
  );
};
