import { useState, useEffect } from "react";
import { getDashboard, getPortfolio } from "../services/api";
import PortfolioCard from "../components/PortfolioCard";
import TopGainersLosers from "../components/TopGainersLosers";
import RecentNews from '../components/RecentNews';
import ActiveAlerts from '../components/ActiveAlerts';

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4 space-y-6">
      {portfolio && <PortfolioCard portfolio={portfolio} />}
      {dashboard && <TopGainersLosers data={dashboard} />}
      {dashboard && <RecentNews news={dashboard.recentNews} />}
      {dashboard && <ActiveAlerts alerts={dashboard.activeAlerts} />}
    </div>
  );
};

export default Dashboard;
