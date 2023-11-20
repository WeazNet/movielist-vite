import { Card } from "../../../design/atoms/Card";
import { Title } from "../../../design/atoms/Title";
import { Image } from "../../../interfaces";
import { BASE_PATH_IMAGE } from "../../../services/utils";

export const ImagesDiv = ({ data }: { data: Image[] }) => {
  return (
    <div>
      <Title innerText="Images" />
      <div className="my-4 scroll-smooth sm:scroll-auto overflow-x-auto touch-pan-x inline-flex gap-2 overflow-visible w-full">
        {data.map((image, key) => (
          <div className="min-w-[600px]">
            <Card
              key={key}
              id={key}
              imageSrc={BASE_PATH_IMAGE + image.file_path}
              title={"film" + key}
            />
          </div>
        )
        )}
      </div>
    </div>
  );
};
