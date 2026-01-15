import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const AssetsTable = ({ assets, sortConfig, setSortConfig, onRowClick }) => {
  const changeColor = (change) => (change >= 0 ? 'text-green-500' : 'text-red-500');

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const sortedAssets = () => {
    if (!sortConfig.key) return assets;
    return [...assets].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const renderHeader = (label, key) => {
    let icon = <FaSort className="inline ml-1 text-gray-400 dark:text-gray-300" />;
    if (sortConfig.key === key) {
      icon = sortConfig.direction === 'asc' ? <FaSortUp className="inline ml-1" /> : <FaSortDown className="inline ml-1" />;
    }
    return (
      <th
        onClick={() => handleSort(key)}
        className="p-3 text-left cursor-pointer select-none whitespace-nowrap"
      >
        {label} {icon}
      </th>
    );
  };

  return (
    <div className="w-full">
      {/* Desktop / Tablet */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow transition-colors duration-300">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <tr>
              {renderHeader("Symbol", "symbol")}
              {renderHeader("Name", "name")}
              {renderHeader("Price", "currentPrice")}
              {renderHeader("Change %", "changePercent")}
              {renderHeader("Volume", "volume")}
            </tr>
          </thead>
          <tbody>
            {sortedAssets().map((asset) => (
              <tr
                key={asset.symbol}
                onClick={() => onRowClick?.(asset)}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100  dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer transform transition duration-200 hover:scale-[1.01]"
              >
                <td className="p-3 font-semibold">{asset.symbol}</td>
                <td className="p-3">{asset.name}</td>
                <td className="p-3">${asset.currentPrice.toLocaleString()}</td>
                <td className={`p-3 font-semibold ${changeColor(asset.changePercent)}`}>
                  {asset.changePercent.toFixed(2)}%
                </td>
                <td className="p-3">{asset.volume.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-3">
        {sortedAssets().map((asset) => (
          <div
            key={asset.symbol}
            onClick={() => onRowClick?.(asset)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 cursor-pointer transition-colors duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-900 dark:text-white">{asset.symbol}</span>
              <span className={`font-semibold ${changeColor(asset.changePercent)}`}>
                {asset.changePercent.toFixed(2)}%
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm">{asset.name}</p>

            <div className="mt-2 text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <p>
                <span className="text-gray-500 dark:text-gray-400">Price:</span> ${asset.currentPrice.toLocaleString()}
              </p>
              <p>
                <span className="text-gray-500 dark:text-gray-400">Volume:</span> {asset.volume.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetsTable;

