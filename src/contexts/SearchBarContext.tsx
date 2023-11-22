import { createContext } from "react";

export const SearchBarContext = createContext({
  inputValue: "",
  setInputValue: (value: string) => { },
});
