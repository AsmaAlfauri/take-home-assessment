const AlertsList = ({ alerts }) => {
  const severityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {alerts.slice(0, 5).map((alert) => (
        <div
          key={alert.id}
          className="bg-white p-3 sm:p-4 rounded-lg shadow border
                     flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"
        >
          {/* Alert content */}
          <div>
            <p className="font-medium text-sm sm:text-base">{alert.message}</p>
            <p className="text-gray-500 text-xs sm:text-sm">
              {new Date(alert.timestamp).toLocaleString()}
            </p>
          </div>

          {/* Severity badge */}
          <span
            className={`self-start sm:self-auto px-2 py-1 rounded-full 
                        text-xs sm:text-sm font-semibold ${severityColor(
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
