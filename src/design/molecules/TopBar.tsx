import { SearchInput } from "../atoms/SearchInput";
import { Title } from "../atoms/Title";
import { Header } from "./Header";

const onChange = (e: any) => {
  return e;
};

export const TopBar = () => {
  return (
    <Header>
      <Title innerText="🎬🍿 Movie library" />
      <SearchInput
        type="text"
        placeholder="🔎 Search for movie"
        onChange={onChange}
      />
    </Header>
  );
};
