import { useContext } from "react";
import { SearchBarContext } from "../../../contexts/SearchBarContext";
import { Input } from "../../../design/atoms/Input";
import { Header } from "../../../design/molecules/Header";
import { BigTitle } from "../../../design/atoms/BigTitle";
import { NavBar } from "./NavBar";

export const TopBar = () => {
  const { inputValue, setInputValue } = useContext(SearchBarContext);

  const onInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Header>
      <BigTitle content="🎬🍿 Movie library" />
      <NavBar />
      <Input
        value={inputValue}
        placeholder="🔎 Search for movie"
        onChange={onInputChange}
      />
    </Header>
  );
};
