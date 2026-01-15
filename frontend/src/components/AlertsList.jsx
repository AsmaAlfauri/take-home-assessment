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
    <div className="space-y-4">
      {alerts.slice(0, 5).map((alert) => (
        <div key={alert.id} className="bg-white p-4 rounded-lg shadow-md border flex justify-between items-start">
          <div>
            <p className="font-medium">{alert.message}</p>
            <p className="text-gray-500 text-sm">{new Date(alert.timestamp).toLocaleString()}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-sm font-semibold ${severityColor(alert.severity)}`}>
            {alert.severity}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AlertsList;
