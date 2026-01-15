import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const AssetsTable = ({ assets, sortConfig, setSortConfig, onRowClick }) => {
  const changeColor = (change) =>
    change >= 0 ? "text-green-500" : "text-red-500";

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedAssets = () => {
    if (!sortConfig.key) return assets;
    const sorted = [...assets].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  };

  const renderHeader = (label, key) => {
    let icon = <span className="inline ml-1">⇅</span>;
    if (sortConfig.key === key) {
      icon =
        sortConfig.direction === "asc" ? (
          <span className="inline ml-1">⬆</span>
        ) : (
          <span className="inline ml-1">⬇</span>
        );
    }
    return (
      <th
        onClick={() => handleSort(key)}
        className="p-3 text-left cursor-pointer select-none "
      >
        {label} {icon}
      </th>
    );
  };

  return (
    <div className="overflow-x-auto">
      {/* Table for large screens */}
      <table className="min-w-full bg-white rounded-lg shadow hidden sm:table">
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
          {sortedAssets().map((asset, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3 font-semibold">{asset.symbol}</td>
              <td className="p-3">{asset.name}</td>
              <td className="p-3">${asset.currentPrice.toLocaleString()}</td>
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

      {/* Flex list for small screens */}
      <div className="sm:hidden space-y-3">
        {sortedAssets().map((asset) => (
          <div
            key={asset.symbol}
            className="bg-white p-3 rounded-lg shadow flex flex-col space-y-1"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{asset.symbol}</span>
              <span
                className={`font-semibold ${changeColor(asset.changePercent)}`}
              >
                {asset.changePercent.toFixed(2)}%
              </span>
            </div>
            <p className="text-gray-600 text-sm">{asset.name}</p>
            <p className="text-gray-600 text-sm">
              Price: ${asset.currentPrice.toLocaleString()}
            </p>
            <p className="text-gray-600 text-sm">
              Volume: {asset.volume.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetsTable;
