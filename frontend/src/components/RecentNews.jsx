const RecentNews = ({ news }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent News</h2>
      <ul className="space-y-4">
        {news.slice(0,5).map((item, index) => (
          <li key={index} className="border-b pb-2">
            <p className="font-medium">{item.title}</p>
            <p className="text-gray-500 text-sm">{item.source} • {new Date(item.timestamp).toLocaleString()}</p>
            <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {item.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentNews;
