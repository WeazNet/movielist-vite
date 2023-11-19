import { Movie } from "../../../interfaces";
import { THEMOVIEDB_URL_NOWPLAYING } from "../../../services/utils";
import { apiOptions } from "../../../services/apiOptions";

export const getNowPlayingMovies = async (): Promise<Movie[]> => {

  const response = await fetch(THEMOVIEDB_URL_NOWPLAYING, apiOptions);

  const data = await response.json();

  return data.results;
};
