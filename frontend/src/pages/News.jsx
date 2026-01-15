import { useState, useEffect } from "react";
import { getNews } from "../services/api";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NewsList from "../components/NewsList";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        console.log('response.data>>:',response.data)
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

  if (loading) return <Loading count={5} height={50} />;
  if (error) return <Error message={error} onRetry={() => window.location.reload()} />;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <NewsList news={news} />
    </div>
  );
};

export default News;
