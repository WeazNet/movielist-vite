import { Text } from "../atoms/Text";

export const SpecificationDiv = ({
  genre,
  release_date,
}: {
  genre: string;
  release_date: string;
}) => {
  return (
    <div className="italic">
      <Text content={genre} />
      <Text content={release_date} />
    </div>
  );
};
