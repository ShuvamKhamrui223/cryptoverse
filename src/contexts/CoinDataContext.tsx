import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { CoinsDataType } from "../types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

// type declarations
type apiErrortype = {
  message: string;
};
type CoinContextType = {
  selectedCurrency: string;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  error: apiErrortype | null;
  allCoins: CoinsDataType[] | undefined;
};

// context definition
const CoinContext = createContext<CoinContextType | undefined>(undefined);

// context provider
export const CoinContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: PropsWithChildren) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("usd");
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
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}`,
        options
      );
      if (!response.ok) throw new Error("soething went wrong");

      return response.json();
    },
    staleTime: 10000,
    // placeholderData: keepPreviousData,
  });

  return (
    <CoinContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        isLoading,
        error,
        allCoins,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export const useCoinDataContext = (): CoinContextType => {
  const context = useContext(CoinContext);

  if (!context) throw new Error("coin context not found");

  return context;
};
