const impactColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
  critical: "bg-purple-100 text-purple-800",
};

const NewsItem = ({ item }) => {
  return (
    <li className="border-b pb-4 space-y-2">
      <p className="font-semibold text-lg">{item.title}</p>
      <p className="text-gray-500 text-sm">
        {item.source} • {new Date(item.timestamp).toLocaleString()}
      </p>
      <span
        className={`inline-block px-2 py-1 text-xs rounded-full ${impactColors[item.impact]}`}
      >
        Impact: {item.impact}
      </span>
      <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full ml-2">
        Category: {item.category}
      </span>
      <p className="text-gray-700 text-sm mt-1">{item.summary}</p>
      {item.affectedAssets.length > 0 && (
        <p className="text-gray-600 text-xs">
          Affected Assets: {item.affectedAssets.join(", ")}
        </p>
      )}
    </li>
  );
};

export default NewsItem;
