import { Link, NavLink, useLocation } from "react-router-dom";

const NavbarBeforeAuthentication = ({ navbarMenu }) => {
  const currentLocation = useLocation();

  return (
    <div className="flex flex-1 items-center justify-end">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          {navbarMenu?.map((menuItem) => (
            <li
              key={menuItem?.itemId}
              className={`p-2 hover:bg-gray-900 ${
                menuItem.pageUrl === currentLocation.pathname && "bg-teal-600"
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

      <div className="flex items-center gap-4 ml-4">
        <div className="sm:flex sm:gap-4">
          <Link
            className="block rounded-md outline outline-1 outline-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
            to={"/auth"}
          >
            Login
          </Link>

          <Link
            className="hidden rounded-md px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block bg-teal-600 dark:text-white dark:hover:text-white/75"
            to={"/auth/register"}
          >
            Register
          </Link>
        </div>

        <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavbarBeforeAuthentication;
