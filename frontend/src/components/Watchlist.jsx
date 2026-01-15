const Watchlist = ({ symbols }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Watchlist</h2>
      <ul className="flex flex-wrap gap-2">
        {symbols.map((symbol, index) => (
          <li
            key={index}
            className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 rounded-full font-semibold text-sm sm:text-base"
          >
            {symbol}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
