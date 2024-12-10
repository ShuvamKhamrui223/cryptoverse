import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  
  return (
    <>
      <section className="bg-gray-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-40 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="authentication"
              src="/assets/Authentication.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <Outlet />
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
