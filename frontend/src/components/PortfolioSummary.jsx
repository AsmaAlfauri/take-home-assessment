const PortfolioSummary = ({ totalValue, totalChange, totalChangePercent, assetsCount }) => {
  const changeColor = totalChange >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-2">
      <p>
        Total Value: <span className="font-bold">${totalValue.toLocaleString()}</span>
      </p>
      <p>
        Total Change: <span className={`${changeColor} font-bold`}>
          ${totalChange.toLocaleString()} ({totalChangePercent.toFixed(2)}%)
        </span>
      </p>
      <p>Assets in portfolio: <span className="font-semibold">{assetsCount}</span></p>
    </div>
  );
};

export default PortfolioSummary;
