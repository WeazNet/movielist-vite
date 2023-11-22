import { NavLink } from "react-router-dom";

export const NavButton = ({ to, name }: { to: string; name: string }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "bg-yellow-200 dark:ring-2 dark:ring-yellow-200 dark:bg-gray-700" : "dark:bg-gray-700 bg-gray-200") + " flex items-center text-lg rounded-full dark:text-white hover:ring-2 hover:ring-yellow-200 text-gray-900 px-4 py-2 sm:p-4 hover:bg-yellow-200 dark:hover:bg-gray-600 transition ease-in-out"}
      to={to}
    >
      {name}
    </NavLink>
  );
};
