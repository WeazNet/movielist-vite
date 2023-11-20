import { ItalicText } from "../atoms/ItalicText";
import { Text } from "../atoms/Text";

export const ArtistInformationsDiv = ({
  real_name,
  fictional_name,
}: {
  real_name: string;
  fictional_name: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Text content={real_name} />
      <ItalicText content={fictional_name} />
    </div>
  );
};
