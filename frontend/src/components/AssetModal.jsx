const AssetModal = ({ asset, onClose }) => {
  if (!asset) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-3">
      <div
        className="bg-white rounded-lg shadow-lg relative
                   w-full max-w-md sm:max-w-lg
                   p-4 sm:p-6"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-lg"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-2xl font-bold mb-3">
          {asset.symbol}{" "}
          <span className="text-gray-500 font-medium">- {asset.name}</span>
        </h2>

        {/* Info */}
        <div className="space-y-2 text-sm sm:text-base">
          <p>
            <span className="font-semibold">Price:</span> $
            {asset.currentPrice.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold">Change:</span>{" "}
            {asset.changePercent.toFixed(2)}%
          </p>

          <p>
            <span className="font-semibold">Volume:</span>{" "}
            {asset.volume.toLocaleString()}
          </p>

          {asset.marketCap && (
            <p>
              <span className="font-semibold">Market Cap:</span> $
              {asset.marketCap.toLocaleString()}
            </p>
          )}
        </div>

        {/* Description */}
        {asset.description && (
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            {asset.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default AssetModal;
