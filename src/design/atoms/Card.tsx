export const Card = ({
  id,
  title,
  imageSrc,
}: {
  id: number;
  title: string;
  imageSrc: string;
}) => {
  return (
    <div
      key={id}
      className="relative rounded overflow-hidden shadow-lg"
    >
      <img className="w-full" src={imageSrc} alt={"image of " + title} />
    </div>
  );
};
