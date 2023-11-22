import { Artist, Crew, Image } from "../../../interfaces";
import { CreditsDiv } from "./CreditsDiv";
import { ImagesDiv } from "./ImagesDiv";

export const MovieBodySection = ({
  credits,
  images,
}: {
  credits: (Crew | Artist)[] | undefined;
  images: Image[] | undefined;
}) => {
  return (
    <section>
      {credits && <CreditsDiv data={credits} />}
      {images && <ImagesDiv data={images} />}
    </section>
  );
};
