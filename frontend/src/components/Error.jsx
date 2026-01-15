const Error = ({ message, onRetry }) => {
  return (
    <div className="text-center text-red-500 space-y-2 p-4">
      <p>{message}</p>
      {onRetry && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Error;
