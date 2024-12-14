import { useQuery } from "@tanstack/react-query";
import Container from "../../Container";

const Newspage = () => {
  const {
    isLoading,
    error,
    data: searchedNews,
  } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const url =
        'https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Off';
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_BING_NEWS_API_KEY,
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "X-BingApis-SDK": "true",
        },
      };

      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      if (!response.ok) throw new Error("soething went wrong");

      return response.json();
    },
    staleTime: 10000,
    // placeholderData: keepPreviousData,
  });
  if (error) <h2 className="">{error.message}</h2>;
  return <Container>news page</Container>;
};

export default Newspage;
