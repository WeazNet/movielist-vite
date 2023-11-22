import { MoviesQueryResponse } from "../../../interfaces";
import { THEMOVIEDB_URL_NOWPLAYING } from "../../../services/utils";
import { apiOptions } from "../../../services/apiOptions";

export const getNowPlayingMoviesByPage = async ({
  pageParam = 1,
}: {
  pageParam: number;
}): Promise<MoviesQueryResponse> => {
  const response = await fetch(
    THEMOVIEDB_URL_NOWPLAYING + `?region=FR&page=${pageParam}`,
    apiOptions
  );
  const data = await response.json();
  return { ...data, prevOffset: pageParam };
};
