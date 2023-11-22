import { MoviesQueryResponse } from "../../../interfaces";
import { THEMOVIEDB_URL_MOVIES } from "../../../services/utils";
import { apiOptions } from "../../../services/apiOptions";

export const getMoviesByQueryAndPage = async ({
  pageParam = 1,
  query,
}: {
  pageParam: number;
  query: string;
}): Promise<MoviesQueryResponse> => {
  const response = await fetch(
    THEMOVIEDB_URL_MOVIES + `?query=${query}&page=${pageParam}`,
    apiOptions
  );
  const data = await response.json();
  return { ...data, prevOffset: pageParam };
};
