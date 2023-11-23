export const Grid = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
        {children}
      </div>
    </section>
  );
};
