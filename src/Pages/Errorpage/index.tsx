import { Link } from "react-router-dom";
import Container from "../../Container";

const Errorpage = () => {
  return (
    <Container>
      <section className="min-h-screen flex flex-col items-center justify-center gap-4 py-[5%]">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="">this page is not available</p>
        <Link to={"/"} className="capitalize bg-emerald-600 py-2 px-4">
          back to home
        </Link>
      </section>
    </Container>
  );
};

export default Errorpage;
