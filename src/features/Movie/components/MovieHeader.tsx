import { ExitButton } from "../../../design/atoms/ExitButton";
import { Loader } from "../../../design/atoms/Loader";
import { MovieInformationsSection } from "./MovieInformationsSection";
import { Movie } from "../../../interfaces";
import { BASE_PATH_IMAGE } from "../../../services/utils";

export const MovieHeader = ({
  isLoading,
  movie,
}: {
  isLoading: boolean;
  movie: Movie;
}) => {
  return (
    <header>
      <ExitButton to="/" />
      {isLoading && <Loader />}
      <MovieInformationsSection
        id={movie.id}
        title={movie.title}
        poster_path={
          movie.poster_path
            ? BASE_PATH_IMAGE + movie.poster_path
            : "https://placehold.co/500x750?text=?&font=roboto"
        }
        overview={movie.overview}
        genre={movie.genres.map((elt) => elt.name).join(", ")}
        release_date={movie.release_date}
      />
    </header>
  );
};
