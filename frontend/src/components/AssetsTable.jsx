import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const AssetsTable = ({ assets, sortConfig, setSortConfig ,onRowClick }) => {
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
    const sorted = [...assets].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  };

  const renderHeader = (label, key) => {
    let icon = <FaSort className="inline ml-1 text-gray-400" />;
    if (sortConfig.key === key) {
      icon = sortConfig.direction === 'asc' ? (
        <FaSortUp className="inline ml-1 " />
      ) : (
        <FaSortDown className="inline ml-1 " />
      );
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
      {/* ===== Desktop / Tablet ===== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
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
                className="border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="p-3 font-semibold">{asset.symbol}</td>
                <td className="p-3">{asset.name}</td>
                <td className="p-3">
                  ${asset.currentPrice.toLocaleString()}
                </td>
                <td
                  className={`p-3 font-semibold ${changeColor(
                    asset.changePercent
                  )}`}
                >
                  {asset.changePercent.toFixed(2)}%
                </td>
                <td className="p-3">{asset.volume.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Mobile ===== */}
      <div className="md:hidden space-y-3">
        {sortedAssets().map((asset) => (
          <div
            key={asset.symbol}
            onClick={() => onRowClick?.(asset)}
            className="bg-white rounded-lg shadow p-4 cursor-pointer "
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{asset.symbol}</span>
              <span
                className={`font-semibold ${changeColor(
                  asset.changePercent
                )}`}
              >
                {asset.changePercent.toFixed(2)}%
              </span>
            </div>

            <p className="text-gray-600 text-sm">{asset.name}</p>

            <div className="mt-2 text-sm space-y-1">
              <p>
                <span className="text-gray-500">Price:</span>{" "}
                ${asset.currentPrice.toLocaleString()}
              </p>
              <p>
                <span className="text-gray-500">Volume:</span>{" "}
                {asset.volume.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetsTable;
