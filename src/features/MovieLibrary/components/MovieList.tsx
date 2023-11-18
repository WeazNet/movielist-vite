import { Link } from "react-router-dom";
import { MovieCard } from "../../../design/atoms/MovieCard";
import { useQuery } from "react-query";
import { getNowPlayingMovies } from "../rules/getNowPlayingMovies";
import { MovieCardSkeleton } from "../../../design/atoms/MovieCardSkeleton";
import { BASE_PATH_IMAGE } from "../../../services/utils";

function MovieList() {
  const {
    isLoading,
    error,
    data: movies,
  } = useQuery(["movies"], getNowPlayingMovies);
  if (error) {
    throw Error("Server is unreachable");
  }
  return (
    <div className="px-5 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {isLoading && <MovieCardSkeleton number={10} />}
        {movies &&
          movies.map((movie) => (
            <Link key={movie.id} to={`movie/${movie.id}`}>
              <MovieCard
                imageSrc={BASE_PATH_IMAGE + movie.poster_path}
                title={movie.title}
                id={movie.id}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default MovieList;
