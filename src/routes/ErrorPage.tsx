import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  return (
    (error.status == 404 && (
      <div id="404-page">
        <h1>Oops!</h1>
        <p>Page introuvable</p>
      </div>
    )) || (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Désolé, il y a une erreur.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    )
  );
}
