import { useEffect, useState } from "react";
import { Movie } from "../../../../interfaces";

export const useFavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>(
    JSON.parse(localStorage.getItem("favoriteMovies") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const addMovieToFavorite = (movie: Movie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  };

  const removeMovieToFavorite = (movie: Movie) => {
    setFavoriteMovies(
      favoriteMovies.filter((oldMovie) => oldMovie.id != movie.id)
    );
  };
  return { favoriteMovies, addMovieToFavorite, removeMovieToFavorite };
};
