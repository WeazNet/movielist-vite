import { useContext, useEffect, useState } from "react";
import { Movie } from "../../../../interfaces";
import { SearchBarContext } from "../../../../contexts/SearchBarContext";

export const useFilteredMovies = ({ movies }: { movies: Movie[] }) => {
  const { inputValue } = useContext(SearchBarContext);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const filtered =
      movies?.filter((movie) =>
        movie.title.toLowerCase().includes(inputValue.toLowerCase())
      ) || [];
    setFilteredMovies(filtered);
  }, [inputValue]);

  return { filteredMovies };
};