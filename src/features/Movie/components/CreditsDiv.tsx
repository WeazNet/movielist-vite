import { Title } from "../../../design/atoms/Title";
import { ArtistCard } from "./ArtistCard";
import { HorizontallyScrollableDiv } from "../../../design/molecules/HorizontallyScrollableDiv";
import { BASE_PATH_IMAGE, getInitiales } from "../../../services/utils";

export const CreditsDiv = ({ data }: { data: any[] }) => {
  return (
    <div>
      <Title content="Credits" />
      <HorizontallyScrollableDiv>
        {data.map((artist) => (
          <ArtistCard
            key={artist.id}
            id={artist.id}
            imageSrc={
              !artist.profile_path
                ? `https://placehold.co/200x300?text=${getInitiales(
                  artist.name
                )}&font=roboto`
                : BASE_PATH_IMAGE + artist.profile_path
            }
            real_name={artist.name}
            fictional_name={artist.character || artist.job}
          />
        ))}
      </HorizontallyScrollableDiv>
    </div>
  );
};
