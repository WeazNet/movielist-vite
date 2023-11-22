import { getUpcomingMoviesByPage } from "../getUpcomingMoviesByPage";
import { useFetchInfiniteMoviesQuery } from "./useFetchInfiniteMoviesQuery";

export const useFetchInfiniteUpcomingQuery = () => {
  return useFetchInfiniteMoviesQuery({
    getMoviesFunction: getUpcomingMoviesByPage,
  });
};
