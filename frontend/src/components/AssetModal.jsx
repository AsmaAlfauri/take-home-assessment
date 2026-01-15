
const AssetModal = ({ asset, onClose }) => {
  if (!asset) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{asset.symbol} - {asset.name}</h2>
        <p>Price: ${asset.currentPrice.toLocaleString()}</p>
        <p>Change: {asset.changePercent.toFixed(2)}%</p>
        <p>Volume: {asset.volume.toLocaleString()}</p>
        {asset.marketCap && <p>Market Cap: ${asset.marketCap.toLocaleString()}</p>}
        {asset.description && <p className="mt-2 text-gray-600">{asset.description}</p>}
      </div>
    </div>
  );
};

export default AssetModal;
