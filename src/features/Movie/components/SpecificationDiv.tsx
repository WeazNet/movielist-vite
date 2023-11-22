import { DateTime } from "luxon";
import { ItalicText } from "../../../design/atoms/ItalicText";

export const SpecificationDiv = ({
  genre,
  release_date,
}: {
  genre: string;
  release_date: string;
}) => {
  const date = DateTime.fromISO(release_date ?? "");


  return (
    <div>
      <ItalicText content={genre} />
      <ItalicText content={date.toLocaleString(DateTime.DATE_MED)} />
    </div>
  );
};
