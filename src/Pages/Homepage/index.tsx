import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { CoinsDataType } from "../../types";
const CoinsTable = lazy(() => import("./components/Coinstable/index.js"));
const QUERY_STALE_TIME = 360000;


type coinsResponse = {
  coins: CoinsDataType[], total: number, page: number
}
const Homepage = () => {
  const {
    isLoading,
    error,
    data: allCoins,
  } = useQuery({
    queryKey: ["coins"],
    queryFn: async (): Promise<CoinsDataType[] | undefined> => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          // x_cg_demo_api_key: import.meta.env.VITE_COIN_GECKO_API_KEY,
        },
      };
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10",
          options
        );
        if (!response.ok) throw new Error("soething went wrong");

        return response.json();
      } catch (error) {
        console.log(error);
      }
    },
    staleTime: QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
  return (
    <>
      <section className="w-full py-[3%] flex items-center flex-col gap-4">
        <h1 className="text-5xl text-gray-300 sm:text-6xl text-center max-w-[40ch] font-bold capitalize">
          track the pulse of crypto: real-time market insights
        </h1>
        <p className="text-gray-400 first-letter:uppercase text-center">
          real-time crypto insights: track prices,trends, and market dynamics
          all at one place
        </p>
        {/* cryto table */}
        <Suspense fallback="loading">
          <CoinsTable coins={allCoins} />
        </Suspense>
      </section>
    </>
  );
};

export default Homepage;
