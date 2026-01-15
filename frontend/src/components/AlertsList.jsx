const AlertsList = ({ alerts }) => {
  const severityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100";
      case "medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-600 dark:text-yellow-100";
      case "low":
        return "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {alerts.slice(0, 5).map((alert) => (
        <div
          key={alert.id}
          className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700
                     flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 transition-colors duration-300 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          {/* Alert content */}
          <div>
            <p className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100">{alert.message}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              {new Date(alert.timestamp).toLocaleString()}
            </p>
          </div>

          {/* Severity badge */}
          <span
            className={`self-start sm:self-auto px-2 py-1 rounded-full text-xs sm:text-sm font-semibold ${severityColor(
              alert.severity
            )}`}
          >
            {alert.severity}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AlertsList;
