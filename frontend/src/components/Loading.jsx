const Loading = ({ height = "32", count = 1 }) => {
  return (
    <div className="space-y-4 p-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`bg-gray-200 rounded-md animate-pulse`}
          style={{ height: `${height}px` }}
        ></div>
      ))}
    </div>
  );
};

export default Loading;
