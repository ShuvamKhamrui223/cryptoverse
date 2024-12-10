import { useQuery, keepPreviousData } from "@tanstack/react-query";
import Container from "../../Container";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { singleCoinType } from "../../types";
import { formatCurrency } from "../../utils/NumberFormatter";
const Detailspage = () => {
  const params = useParams();

  const {
    isLoading,
    error,
    data: singleCoinData,
  } = useQuery({
    queryKey: ["coin"],
    queryFn: async (): Promise<singleCoinType | undefined> => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${params?.coinid}`
      );
      const data = await response.json();
      return data;
    },
    staleTime: 60000,
    placeholderData: keepPreviousData,
  });
  if (error) {
    <h3 className="text-red-100">there are some while fetching recipes</h3>;
  }
  if (isLoading) {
    <h3 className="">loading recipes</h3>;
  }

  // if (singleCoinData) console.log(singleCoinData);
  return (
    <Container>
      <div className="w-full flex flex-col md:flex-row items-center ">
        <img
          src={singleCoinData?.image.large}
          alt={singleCoinData?.id}
          className=""
        />
        <h1 className="text-5xl capitalize">{singleCoinData?.id}</h1>
      </div>
      <section className="w-full flex flex-wrap items-start gap-8">
        <div className="">
          <h2 className="text-3xl capitalize">
            {singleCoinData?.id} value statistics
          </h2>

          <ul className="flex flex-col gap-2  mt-2 mb-8">
            <li className="flex justify-between">
              <p className="capitalize">price in USD</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data?.current_price?.usd)}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">rank</p>
              <p className="font-bold">{singleCoinData?.market_cap_rank}</p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">market cap</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data.market_cap?.usd)}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">all time high</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data.ath?.usd)}
              </p>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-3xl capitalize">other stats</h2>
          <ul className=" flex flex-col gap-2  mt-2 mb-8">
            <li className="flex justify-between">
              <p className="capitalize">total supply</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data?.total_supply)}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">circulating supply</p>
              <p className="font-bold">
                {formatCurrency(
                  singleCoinData?.market_data?.circulating_supply
                )}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">total volume</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data?.total_volume?.usd)}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">market change (in last 24h)</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data?.price_change_24h)}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">genesis date</p>
              <p className="font-bold">{singleCoinData?.genesis_date}</p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">hashing algorithm</p>
              <p className="font-bold">{singleCoinData?.hashing_algorithm}</p>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-3xl capitalize">links</h2>
          <ul className=" flex flex-col gap-2  mt-2 mb-8">
            <li className="flex justify-between gap-4">
              <p className="capitalize">homepage</p>
              <p className="font-bold">{singleCoinData?.links?.homepage}</p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">circulating supply</p>
              <p className="font-bold">
                {
                  singleCoinData?.links.subreddit_url
                }
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">total volume</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data?.total_volume?.usd)}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">market change (in last 24h)</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data?.price_change_24h)}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">genesis date</p>
              <p className="font-bold">{singleCoinData?.genesis_date}</p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">hashing algorithm</p>
              <p className="font-bold">{singleCoinData?.hashing_algorithm}</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-4xl first-letter:uppercase text-gray-200">
          what is {singleCoinData?.id}
        </h2>
        <p className="text-gray-300 tracking-wider my-2 ">
          {singleCoinData?.description?.en}
        </p>
      </section>

      <section className=""></section>
    </Container>
  );
};

export default Detailspage;
