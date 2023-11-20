import { Artist, Crew } from "../../../interfaces";
import { apiOptions } from "../../../services/apiOptions";
import { THEMOVIEDB_URL_MOVIE } from "../../../services/utils";

export const getCreditsById = async (
  id: string
): Promise<(Crew | Artist)[]> => {
  const response = await fetch(
    THEMOVIEDB_URL_MOVIE + `/${id}/credits`,
    apiOptions
  );
  const data = await response.json();
  let count = 0;
  const artists: Artist[] = data.cast.filter(() => {
    return ++count && count <= 10;
  });
  const crewmate: Crew[] = data.crew.filter((elt: Crew) => {
    return elt.job == "Director" || elt.job == "Original Music Composer";
  });

  const credits: (Crew | Artist)[] = [...artists, ...crewmate];

  return credits;
};
