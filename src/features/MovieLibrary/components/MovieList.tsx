import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../../../design/atoms/Loader";
import { Grid } from "../../../design/molecules/Grid";
import { CardSkeleton } from "../../../design/atoms/CardSkeleton";
import { NB_CARDS_IN_ONE_PAGE } from "../../../services/utils";
import { MovieCard } from "./MovieCard";
import { Movie } from "../../../interfaces";

export const MovieList = ({
  favoriteMovies,
  addMovieToFavorite,
  removeMovieToFavorite,
  isLoading,
  movies,
  fetchNextPage,
  hasMorePage,
}: {
  favoriteMovies: Movie[];
  addMovieToFavorite: (movie: Movie) => void;
  removeMovieToFavorite: (movie: Movie) => void;
  isLoading: boolean;
  movies: Movie[] | undefined;
  fetchNextPage: () => any;
  hasMorePage: boolean;
}) => {
  return (
    <InfiniteScroll
      dataLength={movies ? movies.length : 0}
      next={() => fetchNextPage()}
      hasMore={hasMorePage}
      loader={<Loader />}
    >
      <Grid>
        <>
          {isLoading && <CardSkeleton number={NB_CARDS_IN_ONE_PAGE} />}
          {!isLoading &&
            movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                favoriteMovies={favoriteMovies}
                addMovieToFavorite={addMovieToFavorite}
                removeMovieToFavorite={removeMovieToFavorite}
                withHeartDiv={true}
                withRateDiv={true}
              />
            ))}
        </>
      </Grid>
    </InfiniteScroll>
  );
};
