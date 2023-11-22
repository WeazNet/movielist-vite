import { useRouteError } from "react-router-dom";
import { Page404 } from "./Page404";
import { ExitButton } from "../design/atoms/ExitButton";
import { Title } from "../design/atoms/Title";
import { Text } from "../design/atoms/Text";

export default function ErrorPage() {
  const error: any = useRouteError();
  return (
    <div className="bg-[rgba(0,0,0,0.4)] min-w-full min-h-screen p-4">
      <ExitButton to="/" />
      {(error.status == 404 && <Page404 />) || (
        <div className="text-white w-[400px] bg-gray-500 rounded-2xl p-4 sm:mx-auto leading-7">
          <Title content="Sorry" />
          <Text content={error.message} />
        </div>
      )}
    </div>
  );

}
