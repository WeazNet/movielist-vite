import { Main } from "../../../design/molecules/Main";
import { TopBar } from "./TopBar";

export const MovieLibraryRoot = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <Main>
      <TopBar />
      <>
        {children}
      </>
    </Main>
  );
};
