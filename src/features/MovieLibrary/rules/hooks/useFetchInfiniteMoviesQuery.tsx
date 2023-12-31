import { useInfiniteQuery } from "react-query";
import { getMoviesByQueryAndPage } from "../getMoviesByQueryAndPages";
import { useContext } from "react";
import { SearchBarContext } from "../../../../contexts/SearchBarContext";
import { Movie, MoviesQueryResponse } from "../../../../interfaces";

export const useFetchInfiniteMoviesQuery = ({
  getMoviesFunction,
}: {
  getMoviesFunction: ({
    pageParam,
  }: {
    pageParam: number;
  }) => Promise<MoviesQueryResponse>;
}) => {
  const { inputValue } = useContext(SearchBarContext);
  const { data, isLoading, fetchNextPage, hasNextPage, isError } =
    useInfiniteQuery({
      queryKey: ["movies", inputValue],
      queryFn: ({ pageParam }) =>
        inputValue
          ? getMoviesByQueryAndPage({ pageParam, query: inputValue })
          : getMoviesFunction({ pageParam }),
      getNextPageParam: (lastPage) => {
        if (lastPage.prevOffset + 1 > lastPage.total_pages) return false;
        return lastPage.prevOffset + 1;
      },
    });

  if (isError || data?.pages[0]?.success === false)
    throw Error("Server is unreachable");

  let hasMorePage = false;
  if (hasNextPage) hasMorePage = hasNextPage;

  const movies: Movie[] | undefined = data?.pages?.reduce(
    (prev: any[], curr) => {
      if (!curr.results)
        throw Error("Server is unreachable")
      return [...prev, ...curr.results];
    },
    []
  );

  return { isLoading, movies, fetchNextPage, hasMorePage };
};
