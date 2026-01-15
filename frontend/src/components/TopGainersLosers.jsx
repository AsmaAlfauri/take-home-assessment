const TopGainersLosers = ({ data }) => {
  const { topGainers, topLosers } = data;

  const changeColor = (change) =>
    change >= 0 ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400";
  const changeIcon = (change) => (change >= 0 ? "🔼" : "🔽");

  const renderAsset = (asset) => (
    <li
      key={asset.symbol}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
    >
      <div className="flex-1 space-y-1">
        <p className="font-medium text-gray-900 dark:text-white">
          {asset.symbol} - {asset.name}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Price:{" "}
          {asset.currentPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        </p>
      </div>
      <span
        className={`mt-2 sm:mt-0 px-2 py-1 rounded-full font-semibold ${changeColor(
          asset.changePercent
        )}`}
      >
        {changeIcon(asset.changePercent)} {asset.changePercent.toFixed(2)}%
      </span>
    </li>
  );

  return (
    <div className="space-y-6">
      {/* Top Gainers */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📈 Top Gainers</h2>
        <ul className="space-y-2">{topGainers.slice(0, 3).map(renderAsset)}</ul>
      </div>

      {/* Top Losers */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">📉 Top Losers</h2>
        <ul className="space-y-2">{topLosers.slice(0, 3).map(renderAsset)}</ul>
      </div>
    </div>
  );
};

export default TopGainersLosers;
