export const HorizontallyScrollableDiv = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="my-4 scroll-smooth sm:scroll-auto overflow-x-auto touch-pan-x inline-flex gap-4 overflow-visible w-full">
      {children}
    </div>
  );
};
