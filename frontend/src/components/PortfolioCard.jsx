const PortfolioCard = ({ portfolio }) => {
    console.log('portfolio>>:',portfolio)
  const changeColor = portfolio.totalChange >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Portfolio Summary</h2>

      <p className="text-gray-700">
        Total Value: <span className="font-bold">${portfolio.totalValue.toLocaleString()}</span>
      </p>
      <p className="text-gray-700">
        Change: <span className={`${changeColor} font-bold`}>
          ${portfolio.totalChange.toLocaleString()} ({portfolio.totalChangePercent.toFixed(2)}%)
        </span>
      </p>

      <p className="text-gray-500 mt-2">
        Assets in portfolio: <span className="font-semibold">{portfolio.assets.length}</span>
      </p>
    </div>
  );
};

export default PortfolioCard;
