const PortfolioSummary = ({ totalValue, totalChange, totalChangePercent, assetsCount }) => {
  const changeColor = totalChange >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-center transition-colors duration-300">
      {/* Total Value */}
      <div>
        <p className="text-gray-500 dark:text-gray-400">Total Portfolio Value</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">${totalValue.toLocaleString()}</p>
      </div>

      {/* Total Change */}
      <div>
        <p className="text-gray-500 dark:text-gray-400">Total Change</p>
        <p className={`text-xl font-semibold ${changeColor}`}>
          ${totalChange.toLocaleString()} ({totalChangePercent.toFixed(2)}%)
        </p>
      </div>

      {/* Assets Count */}
      <div>
        <p className="text-gray-500 dark:text-gray-400">Assets in Portfolio</p>
        <p className="font-semibold text-gray-900 dark:text-white">{assetsCount}</p>
      </div>
    </div>
  );
};

export default PortfolioSummary;
