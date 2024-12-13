import Container from "../../Container";
import CoinsTable from "../Homepage/components/Coinstable";
import { useCoinDataContext } from "../../contexts/CoinDataContext";

const Coinspage = () => {
  const { allCoins, error, isLoading } = useCoinDataContext();
  console.log(error);

  if (isLoading) "loading";

  if (error) <p className="">{error.message}</p>;

  return (
    <Container className="items-center">
      <CoinsTable coins={allCoins} />
    </Container>
  );
};

export default Coinspage;
