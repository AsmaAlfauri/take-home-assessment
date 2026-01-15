const AssetsTable = ({ assets }) => {
  const changeColor = (change) => (change >= 0 ? 'text-green-500' : 'text-red-500');

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left border-b">Symbol</th>
            <th className="p-2 text-left border-b">Name</th>
            <th className="p-2 text-right border-b">Price</th>
            <th className="p-2 text-right border-b">Change %</th>
            <th className="p-2 text-right border-b">Volume</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="p-2">{asset.symbol}</td>
              <td className="p-2">{asset.name}</td>
              <td className="p-2 text-right">${asset.currentPrice.toLocaleString()}</td>
              <td className={`p-2 text-right font-semibold ${changeColor(asset.changePercent)}`}>
                {asset.changePercent.toFixed(2)}%
              </td>
              <td className="p-2 text-right">{asset.volume?.toLocaleString() || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
