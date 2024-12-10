import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Container from "../../Container";
import { CoinsDataType } from "../../types";
import CoinsTable from "../Homepage/components/Coinstable";

const Coinspage = () => {
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
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
          options
        );
        if (!response.ok) throw new Error("soething went wrong");

        return response.json();
      } catch (error) {
        console.log(error);
      }
    },
    staleTime: 10000,
    placeholderData: keepPreviousData,
  });
  return (
    <Container className="items-center">
      <CoinsTable coins={allCoins} />
    </Container>
  );
};

export default Coinspage;
