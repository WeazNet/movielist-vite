import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import { MovieLibrary } from "./features/MovieLibrary/components/MovieLibrary";
import { Movie } from "./features/Movie/components/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MovieLibrary />
      },
      {
        path: "movie/:id",
        element: <Movie />
      },
    ]
  },
]);