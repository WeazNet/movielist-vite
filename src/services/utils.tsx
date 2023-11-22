export const BASE_PATH_IMAGE: string = "https://image.tmdb.org/t/p/w500/";
export const NB_CARDS_IN_ONE_PAGE: number = 10;
export const NB_CARDS_IN_ONE_PAGE_QUERY: number = 20;
export const THEMOVIEDB_URL_NOWPLAYING: string =
  "https://api.themoviedb.org/3/movie/now_playing";
export const THEMOVIEDB_URL_MOVIE: string =
  "https://api.themoviedb.org/3/movie/";
export const THEMOVIEDB_URL_MOVIES: string =
  "https://api.themoviedb.org/3/search/movie";
export const THEMOVIEDB_URL_UPCOMING: string =
  "https://api.themoviedb.org/3/movie/upcoming";

export const getInitiales = (data: string) => {
  const word = data.split(" ");
  let initiales = "";
  for (let i = 0; i < word.length; i++) {
    initiales += word[i].charAt(0).toUpperCase();
  }
  return initiales;
};
