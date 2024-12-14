import { useQuery } from "@tanstack/react-query";
import Container from "../../Container";
import { useParams } from "react-router-dom";
import { chartType, singleCoinType } from "../../types";
import { formatCurrency } from "../../utils/NumberFormatter";
import { useCoinDataContext } from "../../contexts/CoinDataContext";
import LineChart from "../../components/ui/charts/LineChart";
import { useState } from "react";
const Detailspage = () => {
  const params = useParams();
  const { selectedCurrency } = useCoinDataContext();
  const [selectedTimeRange, setSelectedTimeRange] = useState(10);
  const {
    isLoading,
    error,
    data: singleCoinData,
  } = useQuery({
    queryKey: ["coin", params.coinid],
    queryFn: async (): Promise<singleCoinType | undefined> => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${params?.coinid}`
      );
      const data = await response.json();
      return data;
    },
    staleTime: 10000,
  });

  const {
    isLoading: isChartLoading,
    error: chartError,
    data: chartData,
  } = useQuery({
    queryKey: [params.coinid, selectedTimeRange],
    queryFn: async (): Promise<chartType | undefined> => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${params?.coinid}/market_chart?vs_currency=${selectedCurrency}&days=${selectedTimeRange}&interval=daily`
      );
      const data = await response.json();
      return data;
    },
    staleTime: 10000,
  });

  if (error) {
    <h3 className="text-red-100">there is something wrong</h3>;
  }
  if (isLoading) {
    <h3 className="">loading recipes</h3>;
  }
  if (chartError) console.log(chartError.message);
  // if (chartData) console.log(chartData);
  return (
    <Container className="gap-4">
      <div className="w-full flex flex-col md:flex-row items-center ">
        <img
          src={singleCoinData?.image?.large}
          alt={singleCoinData?.id}
          className="size-40"
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
                {formatCurrency(
                  singleCoinData?.market_data?.current_price?.usd
                )}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">rank</p>
              <p className="font-bold">{singleCoinData?.market_cap_rank}</p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">market cap</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data?.market_cap?.usd)}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="capitalize">all time high</p>
              <p className="font-bold">
                {formatCurrency(singleCoinData?.market_data?.ath?.usd)}
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
                {singleCoinData?.links?.subreddit_url}
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
        <p
          className="text-gray-300 tracking-wider my-2 "
          dangerouslySetInnerHTML={{
            __html:
              typeof singleCoinData?.description?.en === "string"
                ? singleCoinData.description?.en
                : singleCoinData?.description?.en?.outerHTML,
          }}
        />
      </section>
      <div className="">
        <label>data of last 10days</label>
        <select
          name="timerange"
          id=""
          onChange={(e) => setSelectedTimeRange(e.currentTarget.value)}
        >
          <option value="10" selected>
            10 days
          </option>
          <option value="30">30 days</option>
          <option value="180">6 months</option>
          <option value="365">1 year</option>
        </select>
      </div>
      {typeof chartData !== "undefined" && <LineChart chartData={chartData} />}
    </Container>
  );
};

export default Detailspage;
