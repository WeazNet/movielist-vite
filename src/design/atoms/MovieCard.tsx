export const MovieCard = ({
  id,
  title,
  imageSrc,
}: {
  id: number;
  title: string;
  imageSrc: string;
}) => {
  return (
    <div title={title} key={id} className="bg-gray-800 relative rounded overflow-hidden shadow-lg hover:scale-105 w-min-content hover:after:block hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:z-50 hover:after:backdrop-blur-sm hover:after:min-w-full hover:after:min-h-full hover:after:text-white hover:after:content-[attr(title)] hover:after:transition hover:after:font-bold hover:after:text-center hover:after:pt-[60%] sm:text-xl text-2xl hover:after:px-4">
      <img className="w-full" src={imageSrc} alt={"image of " + title} />
    </div>
  );
};
