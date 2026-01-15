import { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PortfolioSummary from "../components/PortfolioSummary";
import PortfolioChart from "../components/PortfolioChart";
import Watchlist from "../components/Watchlist";

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await getPortfolio ();
        setPortfolio(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load portfolio. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  if (loading) return <Loading count={5} height={40} />;
  if (error) return <Error message={error} onRetry={() => window.location.reload()} />;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <PortfolioSummary
        totalValue={portfolio.totalValue}
        totalChange={portfolio.totalChange}
        totalChangePercent={portfolio.totalChangePercent}
        assetsCount={portfolio.assets.length}
      />
      <PortfolioChart assets={portfolio.assets} />
      <Watchlist symbols={portfolio.watchlist} />
    </div>
  );
};

export default PortfolioPage;
