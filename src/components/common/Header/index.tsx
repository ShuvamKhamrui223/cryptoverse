import Container from "../../../Container";
import Logo from "../Logo";
import { useAuthContext } from "../../../contexts/AuthContext";
import NavbarBeforeAuthentication from "./HeaderBeforeAuthentication";
import NavbarAfterAuthentication from "./HeaderAfterAuthentication";
import { navLinks } from "../../../content/navbarMenu";
import React from "react";
type HeaderType = {
  sidebarToggler: () => void;
};
const Header: React.FC<HeaderType> = ({ sidebarToggler }) => {
  const user = useAuthContext();
  return (
    <>
      <header className="w-full h-20 bg-white dark:bg-gray-900 flex items-center">
        <Container className={"w-full"}>
          <div className="flex items-center justify-between">
            <Logo />

            {/* dynamic navbar menu based on authentication status */}
            {user === false ? (
              <NavbarBeforeAuthentication navbarMenu={navLinks} />
            ) : (
              <NavbarAfterAuthentication navbarMenu={navLinks} />
            )}
            <select
              name="currency"
              className="mx-2 px-4 py-2 bg-gray-800 text-gray-300 hover:to-gray-200 uppercase cursor-pointer font-semibold "
              id=""
            >
              <option
                value=""
                className="font-medium bg-blue-950 outline-none border-none rounded-xl"
              >
                usd
              </option>
              <option value="" className="font-medium">
                inr
              </option>
            </select>
            {/* sidebar menu toggler for mobile devices */}
            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              onClick={() => sidebarToggler((prev) => !prev)}
            >
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
        </Container>
      </header>
    </>
  );
};

export default Header;
