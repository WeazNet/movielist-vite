export const CardSkeleton = ({ number }: { number: number }) => {
  return Array(number)
    .fill(0)
    .map((_, id) => (
      <div key={id} className="bg-gray-600 rounded overflow-hidden shadow-lg min-w-[225px] min-h-[338px] animate-pulse"></div>
    ));
};
