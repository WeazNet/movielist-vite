import { Card } from "../../../design/atoms/Card";
import { Title } from "../../../design/atoms/Title";
import { HorizontallyScrollableDiv } from "../../../design/molecules/HorizontallyScrollableDiv";
import { Image } from "../../../interfaces";
import { BASE_PATH_IMAGE } from "../../../services/utils";

export const ImagesDiv = ({ data }: { data: Image[] }) => {
  return (
    <div>
      <Title content="Images" />
      <HorizontallyScrollableDiv>
        {data.map((image, key) => (
          <div key={key} className="min-w-[600px]">
            <Card
              key={key}
              id={key}
              imageSrc={
                image.file_path
                  ? BASE_PATH_IMAGE + image.file_path
                  : "https://placehold.co/500x281?text=Unknown&font=roboto"
              }
              title={"film " + key}
            />
          </div>
        ))}
      </HorizontallyScrollableDiv>
    </div>
  );
};
