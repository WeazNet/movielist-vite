import { Input } from "../../../design/atoms/Input";
import { Title } from "../../../design/atoms/Title";
import { Header } from "../../../design/molecules/Header";

export const TopBar = ({ onInputChange, inputValue }:{onInputChange: (e: string) => void, inputValue: string}) => {
  return (
    <Header>
      <Title innerText="🎬🍿 Movie library" />
      <Input
        value={inputValue}
        placeholder="🔎 Search for movie"
        onChange={onInputChange}
      />
    </Header>
  );
};
