const PortfolioSummary = ({ totalValue, totalChange, totalChangePercent, assetsCount }) => {
  const changeColor = totalChange >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-center">
      {/* Total Value */}
      <div>
        <p className="text-gray-500">Total Portfolio Value</p>
        <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
      </div>

      {/* Total Change */}
      <div>
        <p className="text-gray-500">Total Change</p>
        <p className={`text-xl font-semibold ${changeColor}`}>
          ${totalChange.toLocaleString()} ({totalChangePercent.toFixed(2)}%)
        </p>
      </div>

      {/* Assets Count */}
      <div>
        <p className="text-gray-500">Assets in Portfolio</p>
        <p className="font-semibold">{assetsCount}</p>
      </div>
    </div>
  );
};

export default PortfolioSummary;
