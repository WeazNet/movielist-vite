import { Title } from "../../../design/atoms/Title";
import { ArtistCard } from "../../../design/molecules/ArtistCard";
import { BASE_PATH_IMAGE } from "../../../services/utils";

const getInitiales = (data: string) => {
  const word = data.split(' ');
  let initiales = '';
  for (let i = 0; i < word.length; i++) {
    initiales += word[i].charAt(0).toUpperCase();
  }
  return initiales;
}

export const CreditsDiv = ({ data }: { data: any[] }) => {
  return (
    <div>
      <Title innerText="Credits" />
      <div className="my-4 scroll-smooth sm:scroll-auto overflow-x-auto touch-pan-x inline-flex gap-4 overflow-visible w-full">
        {data.map((artist) => (
          <ArtistCard
            key={artist.id}
            id={artist.id}
            imageSrc={!artist.profile_path
              ? `https://placehold.co/200x300?text=${getInitiales(artist.name)}&font=roboto`
              : BASE_PATH_IMAGE + artist.profile_path}
            real_name={artist.name}
            fictional_name={artist.character || artist.job}
          />
        )
        )}
      </div>
    </div>
  );
};
