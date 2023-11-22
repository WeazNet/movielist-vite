import { BASE_PATH_IMAGE } from "../../../services/utils";
import { useParams } from "react-router-dom";
import { MovieSection } from "./MovieSection";
import { useFetchMovieQueries } from "../rules/hooks/useFetchMovieQueriesById";
import { MovieHeader } from "./MovieHeader";
import { MovieBodySection } from "./MovieBodySection";

export const Movie = () => {
  const { id } = useParams();
  if (!id) return;

  const { isLoading, movie, credits, images } = useFetchMovieQueries(id);

  return (
    movie && (
      <MovieSection imageSrc={BASE_PATH_IMAGE + movie?.backdrop_path}>
        <MovieHeader isLoading={isLoading} movie={movie} />
        <MovieBodySection credits={credits} images={images} />
      </MovieSection>
    )
  );
};
