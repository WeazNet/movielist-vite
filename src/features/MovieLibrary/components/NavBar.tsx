import { NavButton } from "../../../design/atoms/NavButton";

export const NavBar = () => {
  return (
    <nav className="flex gap-2 flex-wrap my-4">
      <NavButton to="/upcoming" name="📅 Upcoming 🔸 🇫🇷" />
      <NavButton to="/" name="🚨 Now playing 🔸 🇫🇷" />
      <NavButton to="/favorite" name="💯 Favorite" />
    </nav>
  )
};