const impactColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
  critical: "bg-purple-100 text-purple-800",
};

const NewsItem = ({ item }) => {
  return (
    <li className="border-b pb-4 space-y-2 sm:flex sm:justify-between sm:items-start sm:space-y-0 sm:space-x-4">
      {/* Left side: Title & summary */}
      <div className="flex-1">
        <p className="font-semibold text-lg">{item.title}</p>
        <p className="text-gray-500 text-sm">
          {item.source} • {new Date(item.timestamp).toLocaleString()}
        </p>
        <p className="text-gray-700 text-sm mt-1">{item.summary}</p>
        {item.affectedAssets.length > 0 && (
          <p className="text-gray-600 text-xs mt-1">
            Affected Assets: {item.affectedAssets.join(", ")}
          </p>
        )}
      </div>

      {/* Right side: Badges */}
      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0 sm:flex-col sm:items-end">
        <span
          className={`inline-block px-2 py-1 text-xs rounded-full ${impactColors[item.impact]}`}
        >
          Impact: {item.impact}
        </span>
        <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
          Category: {item.category}
        </span>
      </div>
    </li>
  );
};

export default NewsItem;
