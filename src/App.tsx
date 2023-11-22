import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { SearchBarContext } from "./contexts/SearchBarContext";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <SearchBarContext.Provider value={{ inputValue, setInputValue }}>
      <RouterProvider router={router} />
    </SearchBarContext.Provider>
  );
}

export default App;
