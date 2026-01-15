const AssetsTable = ({ assets }) => {
  const changeColor = (change) => (change >= 0 ? 'text-green-500' : 'text-red-500');

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Change %</th>
            <th className="px-4 py-2">Volume</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-2 font-medium">{asset.symbol}</td>
              <td className="px-4 py-2">{asset.name}</td>
              <td className="px-4 py-2">${asset.currentPrice.toLocaleString()}</td>
              <td className={`px-4 py-2 font-semibold ${changeColor(asset.changePercent)}`}>
                {asset.changePercent.toFixed(2)}%
              </td>
              <td className="px-4 py-2">{asset.volume?.toLocaleString() || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
