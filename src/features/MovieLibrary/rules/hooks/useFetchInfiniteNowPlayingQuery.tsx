import { getNowPlayingMoviesByPage } from "../getNowPlayingMoviesByPage";
import { useFetchInfiniteMoviesQuery } from "./useFetchInfiniteMoviesQuery";

export const useFetchInfiniteNowPlayingQuery = () => {
  return useFetchInfiniteMoviesQuery({
    getMoviesFunction: getNowPlayingMoviesByPage,
  });
};
