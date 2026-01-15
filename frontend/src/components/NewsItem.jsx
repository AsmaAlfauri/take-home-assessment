const impactColors = {
  low: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
  high: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
  critical: "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100",
};

const NewsItem = ({ item }) => {
  return (
    <li className="border-b pb-4 space-y-2 sm:flex sm:justify-between sm:items-start sm:space-y-0 sm:space-x-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Left side: Title & summary */}
      <div className="flex-1">
        <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">{item.title}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {item.source} • {new Date(item.timestamp).toLocaleString()}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{item.summary}</p>
        {item.affectedAssets.length > 0 && (
          <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
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
        <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 rounded-full">
          Category: {item.category}
        </span>
      </div>
    </li>
  );
};

export default NewsItem;
