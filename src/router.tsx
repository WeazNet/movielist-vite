import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import { NowPlayingMovieLibrary } from "./features/MovieLibrary/components/DirNowPlaying/NowPlayingMovieLibrary";
import { Movie } from "./features/Movie/components/Movie";
import { FavoriteMovieLibrary } from "./features/MovieLibrary/components/DirFavorite/FavoriteMovieLibrary";
import { UpcomingMovieLibrary } from "./features/MovieLibrary/components/DirUpcoming/UpcomingMovieLibrary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <NowPlayingMovieLibrary />
      },
      {
        path: "favorite",
        element: <FavoriteMovieLibrary />
      },
      {
        path: "upcoming",
        element: <UpcomingMovieLibrary />
      },
      {
        path: "movie/:id",
        element: <Movie />
      },
    ]
  },
]);