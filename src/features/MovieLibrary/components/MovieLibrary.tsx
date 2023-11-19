import { TopBar } from "./TopBar";
import MovieList from "./MovieList";
import { Main } from "../../../design/molecules/Main";

export const MovieLibrary = () => {
  return (
    <Main>
      <TopBar />
      <MovieList />
    </Main>
  );
};
