export const Header = ({ children }: { children: JSX.Element[] }) => {
  return (
    <header className="flex flex-wrap gap-2 sm:justify-between">
      {children}
    </header>
  );
};
