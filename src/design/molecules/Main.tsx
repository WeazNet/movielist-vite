export const Main = ({ children }: { children: JSX.Element }) => {
  return (
    <main className="flex flex-col gap-6 min-h-screen min-w-full p-12 dark:bg-gray-800">
      {children}{" "}
    </main>
  );
};
