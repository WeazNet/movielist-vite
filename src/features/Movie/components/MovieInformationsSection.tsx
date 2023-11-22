import { Card } from "../../../design/atoms/Card";
import { MovieInformationsDiv } from "./MovieInformationsDiv";

export const MovieInformationsSection = ({ id, title, poster_path, overview, genre, release_date }: { id: number, title: string, poster_path: string, overview: string, genre: string, release_date: string }) => {
  return (
    <section className="flex flex-col sm:flex-row items-end gap-4 mt-4">
      <Card
        id={id}
        title={title}
        imageSrc={poster_path}
      />
      <MovieInformationsDiv title={title} overview={overview} genre={genre} release_date={release_date} />
    </section>
  )
};