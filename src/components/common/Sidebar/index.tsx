import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../../content/navbarMenu";
import { useId } from "react";

const Sidebar = ({ sidebarStatus }) => {
  const currentLocation = useLocation();
  return (
    <aside
      className={`block pt-8 md:hidden absolute z-10 top-0 ${
        sidebarStatus ? "left-0" : "-left-full"
      } w-1/2 h-full bg-gray-200 dark:bg-gray-800 transition-all duration-150 `}
    >
      <ul className="w-full flex flex-col text-sm">
        {navLinks?.map((menuItem) => (
          <li
            key={menuItem.itemId}
            className={`px-4 py-2 hover:bg-gray-900 ${
              menuItem.pageUrl === currentLocation.pathname && "bg-teal-600"
            }`}
          >
            <NavLink
              className={`w-full text-gray-500 capitalize transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}
              to={menuItem?.pageUrl}
            >
              {menuItem?.item}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
