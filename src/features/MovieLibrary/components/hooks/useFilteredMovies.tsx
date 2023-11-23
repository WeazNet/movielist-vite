import { useContext, useEffect, useState } from "react";
import { Movie } from "../../../../interfaces";
import { SearchBarContext } from "../../../../contexts/SearchBarContext";

export const useFilteredMovies = ({ movies }: { movies: Movie[] }) => {
  const { inputValue } = useContext(SearchBarContext);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const lowercasedInput = inputValue.toLowerCase();
    const filtered =
      movies?.filter((movie) =>
        movie.title.toLowerCase().includes(lowercasedInput)
      ) || [];
    setFilteredMovies(filtered);

    return () => { };
  }, [inputValue]);

  return { filteredMovies };
};
