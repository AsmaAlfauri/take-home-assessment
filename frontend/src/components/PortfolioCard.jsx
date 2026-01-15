const PortfolioCard = ({ portfolio }) => {
  const changeColor = (change) =>
    change >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-4">
      {/* Large screens */}
      <div className="hidden sm:flex justify-between items-center">
        <div>
          <p className="text-gray-500">Total Portfolio Value</p>
          <p className="text-2xl font-bold">
            ${portfolio.totalValue.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Total Change</p>
          <p
            className={`text-xl font-semibold ${changeColor(
              portfolio.totalChange
            )}`}
          >
            ${portfolio.totalChange.toLocaleString()} (
            {portfolio.totalChangePercent.toFixed(2)}%)
          </p>
        </div>
      </div>

      {/* Small screens */}
      <div className="sm:hidden space-y-2">
        <div>
          <p className="text-gray-500">Total Portfolio Value</p>
          <p className="text-xl font-bold">
            ${portfolio.totalValue.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Total Change</p>
          <p
            className={`text-lg font-semibold ${changeColor(
              portfolio.totalChange
            )}`}
          >
            ${portfolio.totalChange.toLocaleString()} (
            {portfolio.totalChangePercent.toFixed(2)}%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
