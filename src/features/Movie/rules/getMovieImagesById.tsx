import { Image } from "../../../interfaces";
import { apiOptions } from "../../../services/apiOptions";
import { THEMOVIEDB_URL_MOVIE } from "../../../services/utils";

export const getImagesById = async (id: string): Promise<Image[]> => {
  const response = await fetch(
    THEMOVIEDB_URL_MOVIE + `/${id}/images`,
    apiOptions
  );
  const data = await response.json();
  const images: Image[] = data.backdrops.filter((image: Image) => {
    return image.iso_639_1 == "en";
  });

  return images;
};
