import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../../../design/atoms/Loader";
import { Grid } from "../../../design/molecules/Grid";
import { CardSkeleton } from "../../../design/atoms/CardSkeleton";
import { BASE_PATH_IMAGE, NB_CARDS_IN_ONE_PAGE } from "../../../services/utils";
import { HeartDiv } from "./HeartDiv";
import { Link } from "react-router-dom";
import { Card } from "../../../design/atoms/Card";
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
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="relative hover:scale-105 w-min-content min-h-full flex items-center bg-[rgba(0,0,0,.4)] rounded"
            >
              <HeartDiv
                movie={movie}
                favoriteMovies={favoriteMovies}
                addMovieToFavorite={addMovieToFavorite}
                removeMovieToFavorite={removeMovieToFavorite}
              />
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
          ))}
        </>
      </Grid>
    </InfiniteScroll>
  );
};
