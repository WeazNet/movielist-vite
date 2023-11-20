import { Link } from "react-router-dom";
import { Card } from "../../../design/atoms/Card";
import { UseQueryResult, useQuery } from "react-query";
import { getNowPlayingMovies } from "../rules/getNowPlayingMovies";
import { MovieCardSkeleton } from "../../../design/atoms/MovieCardSkeleton";
import { BASE_PATH_IMAGE, NB_CARDS_IN_ONE_PAGE } from "../../../services/utils";
import { Movie } from "../../../interfaces";

function MovieList() {
  const { isLoading, data: movies, error }: UseQueryResult<Movie[]> = useQuery(['movies'], () => getNowPlayingMovies(), { staleTime: 60_000 });

  if (error)
    throw Error("Server is unreachable");

  return (
    <div className="px-5 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {isLoading && <MovieCardSkeleton number={NB_CARDS_IN_ONE_PAGE} />}
        {movies &&
          movies.map((movie) => (
            <Link title={movie.title} className="hover:scale-105 w-min-content hover:after:block hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:z-50 hover:after:backdrop-blur-sm hover:after:min-w-full hover:after:min-h-full hover:after:text-white hover:after:content-[attr(title)] hover:after:transition hover:after:font-bold hover:after:text-center hover:after:pt-[50%] sm:text-xl text-2xl hover:after:px-4" key={movie.id} to={`movie/${movie.id}`}>
              <Card
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
