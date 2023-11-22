import { useFavoriteMovies } from "../hooks/useFavoriteMovies";
import { useFetchInfiniteUpcomingQuery } from "../../rules/hooks/useFetchInfiniteUpcomingQuery";
import { MovieList } from "../MovieList";

export const UpcomingMovieList = () => {
  const { favoriteMovies, addMovieToFavorite, removeMovieToFavorite } =
    useFavoriteMovies();

  const { isLoading, movies, fetchNextPage, hasMorePage } =
    useFetchInfiniteUpcomingQuery();

  return (
    <MovieList
      favoriteMovies={favoriteMovies}
      addMovieToFavorite={addMovieToFavorite}
      removeMovieToFavorite={removeMovieToFavorite}
      isLoading={isLoading}
      movies={movies}
      fetchNextPage={fetchNextPage}
      hasMorePage={hasMorePage}
    />
  );
};
