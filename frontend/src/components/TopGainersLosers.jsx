const TopGainersLosers = ({ data }) => {
  const { topGainers, topLosers } = data;

  const changeColor = (change) => (change >= 0 ? 'text-green-500' : 'text-red-500');
  const changeIcon = (change) => (change >= 0 ? '🔼' : '🔽');

  const renderAsset = (asset) => (
    <li key={asset.symbol} className="flex justify-between items-center p-2 border rounded hover:bg-gray-50">
      <div>
        <p className="font-medium">{asset.symbol} - {asset.name}</p>
        <p className="text-gray-500 text-sm">
          Price: {asset.currentPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </p>
      </div>
      <span className={`px-2 py-1 rounded-full font-semibold ${changeColor(asset.changePercent)}`}>
        {changeIcon(asset.changePercent)} {asset.changePercent.toFixed(2)}%
      </span>
    </li>
  );

  return (
    <div className="space-y-6">
      {/* Top Gainers */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">📈 Top Gainers</h2>
        <ul className="space-y-2">
          {topGainers.slice(0, 3).map(renderAsset)}
        </ul>
      </div>

      {/* Top Losers */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">📉 Top Losers</h2>
        <ul className="space-y-2">
          {topLosers.slice(0, 3).map(renderAsset)}
        </ul>
      </div>
    </div>
  );
};

export default TopGainersLosers;
