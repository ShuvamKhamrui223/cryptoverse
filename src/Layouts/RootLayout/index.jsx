import { lazy, Suspense, useState } from "react";
import Header from "../../components/common/Header";
import Container from "../../Container";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import SectionLoader from "../../components/common/PreLoaders/SectionLoader";
import useNetStatus from "../../hooks/useNetStatus";

const Sidebar = lazy(() => import("../../components/common/Sidebar"));
const RootLayout = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const netStatus = useNetStatus();
  const navigation = useNavigation();
  const currentLocation = useLocation();

  if (navigation.state === "loading") return <SectionLoader />;
  return (
    <>
      {!netStatus && (
        <p className="bg-gray-800 text-center text-xs py-1 first-letter:uppercase">
          no internet connection
        </p>
      )}
      <Header sidebarToggler={setSidebarVisibility} />
      <Suspense>
        <Sidebar sidebarStatus={sidebarVisibility} />
      </Suspense>
      <main className="min-h-[85vh] bg-gradient-to-b from-gray-950 to-blue-950">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default RootLayout;
