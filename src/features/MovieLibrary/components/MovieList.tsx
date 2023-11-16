import { Link } from "react-router-dom";
import { MovieCard } from "../../../design/atoms/MovieCard";

export const MovieList = () => {
  return (
    <>
      <Link to="/movie/1">
        <MovieCard id={1} imageSrc={"#"} />
      </Link>
      <Link to="/movie/2">
        <MovieCard id={2} imageSrc={"#"} />
      </Link>
      <Link to="/movie/3">
        <MovieCard id={3} imageSrc={"#"} />
      </Link>
    </>
  )
};