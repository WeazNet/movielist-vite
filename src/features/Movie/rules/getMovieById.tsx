import { Movie } from "../../../interfaces";
import { THEMOVIEDB_URL_MOVIE } from "../../../services/utils";
import { apiOptions } from "../../../services/apiOptions";

export const getMovieById = async (id: string): Promise<Movie> => {
  const response = await fetch(THEMOVIEDB_URL_MOVIE + id, apiOptions);
  const data = await response.json();
  return data;
};
