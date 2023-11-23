import { useContext } from "react";
import { Grid } from "../../../../design/molecules/Grid";
import { SearchBarContext } from "../../../../contexts/SearchBarContext";
import { NoResultsFoundDiv } from "../NoResultsFoundDiv";
import { useFavoriteMovies } from "../hooks/useFavoriteMovies";
import { useFilteredMovies } from "../hooks/useFilteredMovies";
import { MovieCard } from "../MovieCard";

export const FavoriteMoviteList = () => {
  const { inputValue } = useContext(SearchBarContext);
  const { favoriteMovies, addMovieToFavorite, removeMovieToFavorite } =
    useFavoriteMovies();
  const { filteredMovies } = useFilteredMovies({ movies: favoriteMovies });

  return (
    <>
      <Grid>
        <>
          {(inputValue ? filteredMovies : favoriteMovies)?.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favoriteMovies={favoriteMovies}
              addMovieToFavorite={addMovieToFavorite}
              removeMovieToFavorite={removeMovieToFavorite}
              withHeartDiv={false}
              withRateDiv={true}
            />
          ))}
        </>
      </Grid>
      {(inputValue && !filteredMovies.length && <NoResultsFoundDiv />) ||
        (favoriteMovies.length === 0 && <NoResultsFoundDiv />)}
    </>
  );
};
