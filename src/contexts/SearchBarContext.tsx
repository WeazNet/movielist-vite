import { createContext } from "react";

interface SearchBarContextProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export const SearchBarContext = createContext<SearchBarContextProps>({
  inputValue: "",
  setInputValue: () => { },
});
