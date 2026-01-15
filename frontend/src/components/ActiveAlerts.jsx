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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">🔔 Active Alerts</h2>
      <ul className="space-y-4">
        {alerts.slice(0,5).map((alert, index) => (
          <li key={index} className="border-b pb-2">
            <p className="text-gray-700">{alert.message}</p>
            <p className="text-gray-500 text-sm">{new Date(alert.timestamp).toLocaleString('en-US', { hour12: true })}</p>
            <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${severityColor(alert.severity)}`}>
              {alert.severity}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveAlerts;
