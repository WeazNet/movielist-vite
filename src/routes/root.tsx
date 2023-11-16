import { Outlet } from "react-router-dom";
import { Main } from "../design/molecules/Main";

export const Root = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};
