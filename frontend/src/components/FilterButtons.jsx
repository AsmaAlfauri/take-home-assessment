const FilterButtons = ({ currentFilter, setFilter }) => {
  const filters = ['All', 'Stocks', 'Crypto'];

  return (
    <div className="flex space-x-4 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`px-4 py-2 rounded font-semibold border ${
            currentFilter === filter
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
