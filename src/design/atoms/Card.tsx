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
      className="bg-gray-200 relative rounded overflow-hidden shadow-lg"
    >
      <img className="w-full" src={imageSrc} alt={"image of " + title} />
    </div>
  );
};
