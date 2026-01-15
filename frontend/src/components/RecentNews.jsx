const RecentNews = ({ news }) => {
  const categoryColor = (category) => {
  switch (category.toLowerCase()) {
    case 'market': return 'bg-blue-100 text-blue-800';
    case 'crypto': return 'bg-purple-100 text-purple-800';
    case 'technology': return 'bg-green-100 text-green-800';
    case 'macro': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-semibold mb-4">📰 Recent News</h2>
      <ul className="space-y-4">
        {news.slice(0, 5).map((item, index) => (
          <li
            key={index}
            className="border-b pb-2 hover:bg-gray-50 p-3 rounded flex flex-col sm:flex-row sm:justify-between sm:items-center"
          >
            {/* Left content */}
            <div className="flex-1 space-y-1">
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-500 text-sm">
                {item.source} • {new Date(item.timestamp).toLocaleString('en-US', { hour12: true })}
              </p>
            </div>

            {/* Category badge */}
            <div className="mt-2 sm:mt-0">
              <span
                className={`inline-block px-2 py-1 text-xs rounded-full ${categoryColor(item.category)}`}
              >
                {item.category}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentNews;
