import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const AssetsTable = ({ assets, sortConfig, setSortConfig }) => {
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
        <FaSortUp className="inline ml-1 text-gray-600" />
      ) : (
        <FaSortDown className="inline ml-1 text-gray-600" />
      );
    }
    return (
      <th
        onClick={() => handleSort(key)}
        className="p-3 text-left cursor-pointer select-none"
      >
        {label} {icon}
      </th>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead className="bg-gray-100">
          <tr>
            {renderHeader('Symbol', 'symbol')}
            {renderHeader('Name', 'name')}
            {renderHeader('Price', 'currentPrice')}
            {renderHeader('Change %', 'changePercent')}
            {renderHeader('Volume', 'volume')}
          </tr>
        </thead>
        <tbody>
          {sortedAssets().map((asset, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
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
  );
};

export default AssetsTable;
