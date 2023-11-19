import { useQuery } from "react-query";
import { ExitButton } from "../../../design/atoms/ExitButton";
import { getMovieById } from "../rules/getMovieById";
import { BASE_PATH_IMAGE } from "../../../services/utils";
import { useParams } from "react-router-dom";
import { Genre, Movie as MovieInterface } from "../../../interfaces";
import { MovieInformationsSection } from "../../../design/molecules/MovieInformationsSection";
import { BeatLoader } from "react-spinners";
import { useState } from "react";


export const Movie = () => {
  const [genre, setGenre] = useState("");

  const { id } = useParams();
  if (!id) throw Error(`Movie ${id} not found`);
  const {
    isLoading,
    data: movie,
  }: { isLoading: boolean; data: MovieInterface | undefined } = useQuery(
    ["movies", id],
    () => getMovieById(id)
  );

  if (movie)
    movie.genres.map((elt) => {
      return (genre == "") ? setGenre(elt.name) : setGenre(genre + ", " + elt.name)
    });

  return (
    <>
      <header>
        <ExitButton to="/" />
        {isLoading && (
          <div className="min-w-full text-center">
            <BeatLoader color="white" />
          </div>
        )}
        {movie && (
          <MovieInformationsSection
            id={parseInt(id)}
            title={movie.title}
            poster_path={BASE_PATH_IMAGE + movie.poster_path}
            overview={movie.overview}
            genre={genre}
            release_date={movie.release_date}
          />
        )}
      </header>
    </>
  );
};
