import { UseQueryResult, useQuery } from "react-query";
import { ExitButton } from "../../../design/atoms/ExitButton";
import { getMovieById } from "../rules/getMovieById";
import { BASE_PATH_IMAGE } from "../../../services/utils";
import { useParams } from "react-router-dom";
import { Genre, Movie as MovieInterface } from "../../../interfaces";
import { MovieInformationsSection } from "../../../design/molecules/MovieInformationsSection";
import { BeatLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { MovieSection } from "../../../design/molecules/MovieSection";
import { Title } from "../../../design/atoms/Title";

export const Movie = () => {
  const [genres, setGenres] = useState("");

  const { id } = useParams();
  if (!id) return;

  const {
    isLoading,
    data: movie,
    error,
  }: UseQueryResult<MovieInterface> = useQuery(["movies", id], () =>
    getMovieById(id)
  );

  useEffect(() => {
    if (movie) {
      setGenres(movie.genres.map((elt) => elt.name).join(", "));
    }
  }, [movie]);

  if (error) throw new Error("Movie not found");

  return (
    movie && (
      <MovieSection imageSrc={BASE_PATH_IMAGE + movie?.backdrop_path}>
        <header>
          <ExitButton to="/" />
          {isLoading && (
            <div className="min-w-full text-center">
              <BeatLoader color="white" />
            </div>
          )}
          <MovieInformationsSection
            id={parseInt(id)}
            title={movie.title}
            poster_path={BASE_PATH_IMAGE + movie.poster_path}
            overview={movie.overview}
            genre={genres}
            release_date={movie.release_date}
          />
        </header>
        <section>
          <div>
            <Title innerText="Credits" />
          </div>
          <div>
            <Title innerText="Images" />
          </div>

        </section>
      </MovieSection>
    )
  );

};
