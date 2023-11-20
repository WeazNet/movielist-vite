import { Card } from "../../../design/atoms/Card";
import { Title } from "../../../design/atoms/Title";
import { Image } from "../../../interfaces";
import { BASE_PATH_IMAGE } from "../../../services/utils";

export const ImagesDiv = ({ data }: { data: Image[] }) => {
  return (
    <div>
      <Title innerText="Images" />
      <div className="my-4 scroll-smooth sm:scroll-auto overflow-x-auto touch-pan-x inline-flex gap-4 overflow-visible w-full">
        {data.map((image, key) => (
          <div key={key} className="min-w-[600px]" >
            <Card
              key={key}
              id={key}
              imageSrc={image.file_path ? BASE_PATH_IMAGE + image.file_path : "https://placehold.co/500x281?text=Unknown&font=roboto"}
              title={"film " + key}
            />
          </div>
        )
        )}
      </div>
    </div >
  );
};
