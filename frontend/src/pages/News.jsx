import { useState, useEffect } from "react";
import { getNews } from "../services/api";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NewsList from "../components/NewsList";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [impact, setImpact] = useState("All");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = () => {
    if (impact === "All") return news;
    return news.filter((item) => item.impact === impact);
  };

  if (loading) return <Loading count={5} height={50} />;
  if (error)
    return <Error message={error} onRetry={() => window.location.reload()} />;
  
  const impacts = ["All", "critical", "high", "medium", "low"];
 return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">News</h1>

      {/* Impact Filter */}
      <div className="flex space-x-4 mb-4">
        {impacts.map((imp) => (
          <button
            key={imp}
            onClick={() => setImpact(imp)}
            className={`px-4 py-2 rounded-md font-semibold border transition-colors
              ${impact === imp ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            {imp.charAt(0).toUpperCase() + imp.slice(1)}
          </button>
        ))}
      </div>

      {/* News List */}
      <NewsList news={filteredNews()} />
    </div>
  );
};

export default News;
