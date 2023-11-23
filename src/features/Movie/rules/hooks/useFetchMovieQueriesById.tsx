import { UseQueryResult, useQueries } from "react-query";
import { Artist, Crew, Image, Movie } from "../../../../interfaces";
import { getMovieById } from "../getMovieById";
import { getCreditsById } from "../getMovieCreditsById";
import { getImagesById } from "../getMovieImagesById";

export const useFetchMovieQueries = (id: string) => {
  const results: [UseQueryResult<Movie>, UseQueryResult<(Crew | Artist)[]>, UseQueryResult<Image[]>] = useQueries([
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

  if (isError) throw new Response("Movie not Found", { status: 404 })

  const movie: Movie | undefined = results[0].data;
  const credits: (Crew | Artist)[] | undefined = results[1].data;
  const images: Image[] | undefined = results[2].data;

  return { isLoading, movie, credits, images };
};