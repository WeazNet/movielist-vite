/* TO DO
import { Review } from "../../../interfaces";
import { apiOptions } from "../../../services/apiOptions";
import { THEMOVIEDB_URL_MOVIE } from "../../../services/utils";

export const getImagesById = async (
  id: string
): Promise<Review[]> => {
  const response = await fetch(
    THEMOVIEDB_URL_MOVIE + `/${id}/reviews`,
    apiOptions
  );
  const data = await response.json();
  const images: Review[] = data.backdrops.filter((image: Review) => {
    return (image.iso_639_1 == "en")
  });

  return images;
};
*/