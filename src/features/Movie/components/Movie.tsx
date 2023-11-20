import { UseQueryResult, useQueries } from "react-query";
import { ExitButton } from "../../../design/atoms/ExitButton";
import { getMovieById } from "../rules/getMovieById";
import { BASE_PATH_IMAGE } from "../../../services/utils";
import { useParams } from "react-router-dom";
import { Artist, Crew, Image, Movie as MovieInterface } from "../../../interfaces";
import { MovieInformationsSection } from "../../../design/molecules/MovieInformationsSection";
import { BeatLoader } from "react-spinners";
import { MovieSection } from "../../../design/molecules/MovieSection";
import { getCreditsById } from "../rules/getMovieCreditsById";
import { CreditsDiv } from "./CreditsDiv";
import { getImagesById } from "../rules/getMovieImagesById";
import { ImagesDiv } from "./ImagesDiv";

export const Movie = () => {
  const { id } = useParams();
  if (!id) return;

  const results: [UseQueryResult<MovieInterface>, UseQueryResult<(Crew | Artist)[]>, UseQueryResult<Image[]>] = useQueries([
    {
      queryKey: ["movies", id],
      queryFn: () => getMovieById(id),
      staleTime: 60_000,
    },
    {
      queryKey: ["credits", id],
      queryFn: () => getCreditsById(id),
      staleTime: 60_000,
    },
    {
      queryKey: ["images", id],
      queryFn: () => getImagesById(id),
      staleTime: 60_000,
    }
  ]);

  const isLoading = results.some((query) => query.isLoading);
  const isError = results.some((query) => query.isError);

  const movie: MovieInterface | undefined = results[0].data;
  const credits: (Crew | Artist)[] | undefined = results[1].data;
  const images: Image[] | undefined = results[2].data;
  if (isError) throw new Error("Movie not found");

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
            genre={movie.genres.map((elt) => elt.name).join(", ")}
            release_date={movie.release_date}
          />
        </header>
        <section>
          {credits && <CreditsDiv data={credits} />}
          {images && <ImagesDiv data={images} />}
        </section>
      </MovieSection>
    )
  );
};
