import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./Layouts/RootLayout";
import AuthLayout from "./Layouts/AuthLayout";
import ProtectedRoutes from "./Pages/ProtectedRoutes";

// initial pages
import Homepage from "./Pages/Homepage";
import Errorpage from "./Pages/Errorpage";
import SectionLoader from "./components/common/PreLoaders/SectionLoader";
/* lazy pages */

const Coinspage = lazy(() => import("./Pages/Coinspage"));
const Newspage = lazy(() => import("./Pages/Newspage"));
const Detailspage = lazy(() => import("./Pages/Detailspage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));

// protected route
const SavedPage = lazy(() => import("./Pages/ProtectedRoutes/SavedPage"));

// authentication related pages
const Signinpage = lazy(
  () => import("./Layouts/AuthLayout/components/forms/Signin")
);
const Registerpage = lazy(
  () => import("./Layouts/AuthLayout/components/forms/Register")
);
const RecipeSiteRoutes = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<SectionLoader />}>
              <Signinpage />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense fallback={<SectionLoader />}>
              <Registerpage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Errorpage />,

      children: [
        { index: true, element: <Homepage /> },
        {
          path: ":coinid",
          element: (
            <Suspense fallback={<SectionLoader />}>
              <Detailspage />
            </Suspense>
          ),
        },
        {
          path: "coins/:coinid",
          element: (
            <Suspense>
              <Detailspage />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<SectionLoader />}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: "coins",
          element: (
            <Suspense fallback={<SectionLoader />}>
              <Coinspage />
            </Suspense>
          ),
        },
        {
          path: "saved",
          element: (
            <ProtectedRoutes>
              <Suspense fallback={<SectionLoader />}>
                <SavedPage />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={AppRouter} fallbackElement={<SectionLoader />} />
  );
};

export default RecipeSiteRoutes;
