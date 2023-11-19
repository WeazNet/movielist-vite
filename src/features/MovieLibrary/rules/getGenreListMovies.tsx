import { Genre } from "../../../interfaces";
import { apiOptions } from "../../../services/apiOptions";
import { THEMOVIEDB_URL_GENRE_LIST } from "../../../services/utils";

export const getGenreListMovies = async (): Promise<Genre[]> => {
  const response = await fetch(THEMOVIEDB_URL_GENRE_LIST, apiOptions);
  const data = await response.json();

  return data.genres;
};