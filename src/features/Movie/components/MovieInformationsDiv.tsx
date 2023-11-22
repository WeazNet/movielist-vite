import { Text } from "../../../design/atoms/Text";
import { Title } from "../../../design/atoms/Title";
import { SpecificationDiv } from "./SpecificationDiv";

export const MovieInformationsDiv = ({ title, overview, genre, release_date }: { title: string, overview: string, genre: string, release_date: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <Title content={title} />
      <Text content={overview} />
      <SpecificationDiv genre={genre} release_date={release_date} />
    </div>
  )
};