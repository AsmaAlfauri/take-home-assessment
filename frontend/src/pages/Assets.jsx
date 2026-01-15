import { useState, useEffect } from 'react';
import { getStocks, getCrypto } from '../services/api';
import AssetsTable from '../components/AssetsTable';
import FilterButtons from '../components/FilterButtons';

const AssetsPage = () => {
  const [stocks, setStocks] = useState([]);
  const [crypto, setCrypto] = useState([]);
  const [filter, setFilter] = useState('All'); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stocksResponse = await getStocks();
        const cryptoResponse = await getCrypto();

        setStocks(stocksResponse.data);
        setCrypto(cryptoResponse.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch assets. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredAssets = () => {
    if (filter === 'All') return [...stocks, ...crypto];
    if (filter === 'Stocks') return stocks;
    if (filter === 'Crypto') return crypto;
  };

  if (loading) return <div>Loading assets...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Assets</h1>

      {/* Filter Buttons */}
      <FilterButtons currentFilter={filter} setFilter={setFilter} />

      {/* Assets Table */}
      <AssetsTable assets={filteredAssets()} />
    </div>
  );
};

export default AssetsPage;
