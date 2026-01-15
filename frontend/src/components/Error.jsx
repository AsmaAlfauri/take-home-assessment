const Error = ({ message, onRetry }) => {
  return (
    <div className="text-center space-y-2 p-4 
                    bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200 rounded-lg transition-colors duration-300">
      <p>{message}</p>
      {onRetry && (
        <button
          className="bg-blue-500 text-white dark:bg-blue-600 dark:text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-600 dark:hover:bg-blue-700"
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Error;
