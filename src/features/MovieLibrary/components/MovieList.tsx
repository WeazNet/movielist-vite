import { Link } from "react-router-dom";
import { MovieCard } from "../../../design/atoms/MovieCard";
import { useMovies } from "../../../useMovies";

function MovieList() {
  const { data: movies } = useMovies();
  
  return (
    <div className="px-5 py-5"> {/* Padding around the movie list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"> {/* Responsive grid layout */}
        {movies ? movies.map((movie) => (
          <div key={movie.id} className="flex flex-col items-center">
            <div className="bg-gray-800 rounded overflow-hidden shadow-lg"> {/* Card styling */}
              <img
                className="w-full" // Full width of the card
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className="text-center text-white text-lg mt-2 mb-4"> {/* Title styling */}
                {movie.title}
              </h3>
            </div>
          </div>
        )) : <p className="text-center text-white">Error</p>}
      </div>
    </div>
  );
}

export default MovieList;

