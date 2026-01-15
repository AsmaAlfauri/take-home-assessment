const AssetModal = ({ asset, onClose }) => {
  if (!asset) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-3">
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg relative
                   w-full max-w-md sm:max-w-lg
                   p-4 sm:p-6 transition-colors duration-300"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 dark:text-gray-200 hover:text-gray-700 dark:hover:text-white 
                     text-lg px-4 py-2 rounded-md bg-blue-500 dark:bg-blue-600 text-white dark:text-white 
                     hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {asset.symbol}{" "}
          <span className="text-gray-500 dark:text-gray-400 font-medium">- {asset.name}</span>
        </h2>

        {/* Info */}
        <div className="space-y-2 text-sm sm:text-base text-gray-900 dark:text-gray-100">
          <p>
            <span className="font-semibold">Price:</span> ${asset.currentPrice.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold">Change:</span> {asset.changePercent.toFixed(2)}%
          </p>

          <p>
            <span className="font-semibold">Volume:</span> {asset.volume.toLocaleString()}
          </p>

          {asset.marketCap && (
            <p>
              <span className="font-semibold">Market Cap:</span> ${asset.marketCap.toLocaleString()}
            </p>
          )}
        </div>

        {/* Description */}
        {asset.description && (
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {asset.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default AssetModal;
