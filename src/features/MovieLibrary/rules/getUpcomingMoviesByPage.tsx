import { MoviesQueryResponse } from "../../../interfaces";
import { THEMOVIEDB_URL_UPCOMING } from "../../../services/utils";
import { apiOptions } from "../../../services/apiOptions";

export const getUpcomingMoviesByPage = async ({
  pageParam = 1,
}: {
  pageParam: number;
}): Promise<MoviesQueryResponse> => {
  const response = await fetch(
    THEMOVIEDB_URL_UPCOMING + `?region=FR&page=${pageParam}`,
    apiOptions
  );
  const data = await response.json();
  return { ...data, prevOffset: pageParam };
};
