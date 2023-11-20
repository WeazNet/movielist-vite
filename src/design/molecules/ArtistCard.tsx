import { Card } from "../atoms/Card";
import { ArtistInformationsDiv } from "./ArtistInformationsDiv";

export const ArtistCard = ({
  id,
  imageSrc,
  real_name,
  fictional_name,
}: {
  id: number;
  imageSrc: string;
  real_name: string;
  fictional_name: string;
}) => {
  return (
    <div className="basis-[200px] min-w-[200px]">
      <Card id={id} title={real_name} imageSrc={imageSrc} />
      <ArtistInformationsDiv
        real_name={real_name}
        fictional_name={fictional_name}
      />
    </div>
  );
};
