import { useState, useEffect } from "react";
import { getDashboard, getPortfolio } from "../services/api";
import PortfolioCard from "../components/PortfolioCard";
import TopGainersLosers from "../components/TopGainersLosers";
import RecentNews from "../components/RecentNews";
import ActiveAlerts from "../components/ActiveAlerts";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioResponse = await getPortfolio();
        setPortfolio(portfolioResponse.data.data);

        const dashboardResponse = await getDashboard();
        setDashboard(dashboardResponse.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading count={4} height={48} />;
  if (error)
    return <Error message={error} onRetry={() => window.location.reload()} />;

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        <div className="md:w-1/2">
          <TopGainersLosers data={dashboard} />
        </div>
        <div className="md:w-1/2 space-y-6">
          <RecentNews news={dashboard.recentNews} />
          <ActiveAlerts alerts={dashboard.activeAlerts} />
        </div>
      </div>

      <div className="w-full">
        <PortfolioCard portfolio={portfolio} />
      </div>
    </div>
  );
};

export default Dashboard;
