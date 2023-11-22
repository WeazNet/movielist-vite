import { Link } from "react-router-dom";
import { Card } from "../../../../design/atoms/Card";
import { BASE_PATH_IMAGE } from "../../../../services/utils";
import { useContext } from "react";
import { Grid } from "../../../../design/molecules/Grid";
import { SearchBarContext } from "../../../../contexts/SearchBarContext";
import { NoResultsFoundDiv } from "../NoResultsFoundDiv";
import { useFavoriteMovies } from "../hooks/useFavoriteMovies";
import { useFilteredMovies } from "../hooks/useFilteredMovies";

export const FavoriteMoviteList = () => {
  const { inputValue } = useContext(SearchBarContext);
  const { favoriteMovies } = useFavoriteMovies();
  const { filteredMovies } = useFilteredMovies({ movies: favoriteMovies });

  return (
    <>
      <Grid>
        <>
          {(inputValue ? filteredMovies : favoriteMovies)?.map((movie) => (
            <div
              key={movie.id}
              className="relative hover:scale-105 w-min-content"
            >
              <Link title={movie.title} to={`/movie/${movie.id}`}>
                <Card
                  imageSrc={BASE_PATH_IMAGE + movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                />
              </Link>
            </div>
          ))}
        </>
      </Grid>
      {inputValue && !filteredMovies.length && <NoResultsFoundDiv />}
    </>
  );
};
