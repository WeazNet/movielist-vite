export const Grid = ({ children }: { children: JSX.Element[] }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(254px,1fr))] gap-4">
      {children}
    </section>
  );
};
