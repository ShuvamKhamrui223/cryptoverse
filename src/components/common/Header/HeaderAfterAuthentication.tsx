import { Link, NavLink, useLocation } from "react-router-dom";

const NavbarAfterAuthentication = ({ navbarMenu }) => {
  const currentLocation = useLocation();

  return (
    <div className="flex flex-1 items-center justify-end gap-4">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          {navbarMenu?.map((menuItem) => (
            <li
              key={menuItem?.itemId}
              className={`p-2 hover:bg-gray-900 ${
                menuItem.pageUrl === currentLocation.pathname && "bg-blue-700"
              }`}
            >
              <NavLink
                className="text-gray-500 capitalize transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                to={menuItem?.pageUrl}
              >
                {menuItem?.item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center mr-4">
        <Link
          className="hidden bg-red-700 px-4 py-2 text-sm font-medium capitalize text-teal-600 transition hover:text-teal-600/75 sm:block dark:text-white dark:hover:text-white/75"
          href="#"
        >
          logout
        </Link>
      </div>
    </div>
  );
};

export default NavbarAfterAuthentication;
