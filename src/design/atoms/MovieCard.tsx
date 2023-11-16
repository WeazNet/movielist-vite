export const MovieCard = ({
  id,
  imageSrc,
}: {
  id: number;
  imageSrc: string;
}) => {
  return (
    <div className="shadow-lg h-auto transition ease-in-out rounded-md hover:cursor-pointer hover:shadow-2xl">
      <img
        className="rounded-md object-cover"
        src={imageSrc}
        alt={`image ${id}`}
      />
    </div>
  );
};
