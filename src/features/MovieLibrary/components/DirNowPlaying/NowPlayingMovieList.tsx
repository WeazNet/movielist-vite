import { useFavoriteMovies } from "../hooks/useFavoriteMovies";
import { useFetchInfiniteNowPlayingQuery } from "../../rules/hooks/useFetchInfiniteNowPlayingQuery";
import { MovieList } from "../MovieList";

export const NowPlayingMovieList = () => {
  const { favoriteMovies, addMovieToFavorite, removeMovieToFavorite } =
    useFavoriteMovies();

  const { isLoading, movies, fetchNextPage, hasMorePage } =
    useFetchInfiniteNowPlayingQuery();

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
