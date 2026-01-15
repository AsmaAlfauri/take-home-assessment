const ActiveAlerts = ({ alerts }) => {
  const severityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-yellow-100 text-yellow-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 ">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">🔔 Active Alerts</h2>
      <ul className="space-y-3 sm:space-y-4">
{alerts.slice(0, 5).map((alert, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b pb-3"
          >
            {/* Alert content */}
            <div>
              <p className="text-gray-700 text-sm sm:text-base">
                {alert.message}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                {new Date(alert.timestamp).toLocaleString("en-US", {
                  hour12: true,
                })}
              </p>
            </div>

            {/* Severity badge */}
            <span
              className={`self-start sm:self-center px-2 py-1 text-xs font-semibold rounded-full ${severityColor(
                alert.severity
              )}`}
            >
              {alert.severity}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveAlerts;
