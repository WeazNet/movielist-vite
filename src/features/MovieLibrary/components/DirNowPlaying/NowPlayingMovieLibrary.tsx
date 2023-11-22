import { MovieLibraryRoot } from "../MovieLibraryRoot"
import { NowPlayingMovieList } from "./NowPlayingMovieList";


export const NowPlayingMovieLibrary = () => {
  return (
    <MovieLibraryRoot>
      <NowPlayingMovieList />
    </MovieLibraryRoot>
  );
};
