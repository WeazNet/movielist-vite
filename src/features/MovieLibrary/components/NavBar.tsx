import { useContext } from "react";
import { NavButton } from "../../../design/atoms/NavButton";
import { SearchBarContext } from "../../../contexts/SearchBarContext";

export const NavBar = () => {
  const { inputValue } = useContext(SearchBarContext);
  const location = window.location.pathname;
  return (
    <nav className="flex gap-2 flex-wrap my-4">
      {inputValue.length == 0 && (
        <>
          <NavButton to="/upcoming" name="📅 Upcoming 🔸 🇫🇷" />
          <NavButton to="/" name="🚨 Now playing 🔸 🇫🇷" />
        </>
      )}
      {inputValue.length != 0 && location != "/favorite" && (
        <NavButton to={location} name="🔎 Search" />
      )}

      <NavButton to="/favorite" name="💯 Favorite" />
    </nav>
  );
};
