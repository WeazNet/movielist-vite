import { Input } from "../../../design/atoms/Input";
import { Title } from "../../../design/atoms/Title";
import { Header } from "../../../design/molecules/Header";

const onChange = (e: any) => {
  return e;
};

export const TopBar = () => {
  return (
    <Header>
      <Title innerText="🎬🍿 Movie library" />
      <Input
        value=""
        placeholder="🔎 Search for movie"
        onChange={onChange}
      />
    </Header>
  );
};
