import { PATH_IMAGE_BLANK } from "../../services/utils";

export const Card = ({
  id,
  title,
  imageSrc,
}: {
  id: number;
  title: string;
  imageSrc: string;
}) => {
  const handleLoad = (e: any) => {
    e.target.src = imageSrc;
  };
  return (
    <div key={id} className="relative rounded overflow-hidden shadow-lg">
      <img
        onLoad={(e) => handleLoad(e)}
        className="w-full"
        src={PATH_IMAGE_BLANK}
        alt={"image of " + title}
      />
    </div>
  );
};
