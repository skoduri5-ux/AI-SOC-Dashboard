import { useState } from "react";
import { FaSearch, FaEye, FaRobot } from "react-icons/fa";

const alerts = [
  {
    id: 1001,
    severity: "Critical",
    attack: "SQL Injection",
    ip: "192.168.1.10",
    status: "Blocked",
    time: "10:30 AM",
  },
  {
    id: 1002,
    severity: "High",
    attack: "Brute Force",
    ip: "10.0.0.15",
    status: "Investigating",
    time: "10:45 AM",
  },
  {
    id: 1003,
    severity: "Medium",
    attack: "Port Scan",
    ip: "172.16.0.12",
    status: "Monitoring",
    time: "11:10 AM",
  },
  {
    id: 1004,
    severity: "Low",
    attack: "Ping Sweep",
    ip: "192.168.0.25",
    status: "Resolved",
    time: "11:25 AM",
  },
];

function AlertTable() {
  const [search, setSearch] = useState("");

  const filteredAlerts = alerts.filter(
    (alert) =>
      alert.attack.toLowerCase().includes(search.toLowerCase()) ||
      alert.ip.includes(search)
  );

  const severityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-600";
      case "High":
        return "bg-orange-500";
      case "Medium":
        return "bg-yellow-500";
      default:
        return "bg-green-500";
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Blocked":
        return "bg-green-600";
      case "Investigating":
        return "bg-orange-500";
      case "Monitoring":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mt-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-white">
          🚨 Security Alerts
        </h2>

        <div className="flex items-center bg-slate-800 rounded-xl px-3 py-2">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search attack or IP..."
            className="bg-transparent outline-none text-white ml-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      <table className="w-full text-white">

        <thead>

          <tr className="border-b border-slate-700">

            <th className="py-3">ID</th>
            <th>Severity</th>
            <th>Attack</th>
            <th>IP</th>
            <th>Status</th>
            <th>Time</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {filteredAlerts.map((alert) => (

            <tr
              key={alert.id}
              className="border-b border-slate-800 hover:bg-slate-800 transition"
            >

              <td className="py-4">{alert.id}</td>

              <td>

                <span
                  className={`${severityColor(
                    alert.severity
                  )} px-3 py-1 rounded-full text-sm`}
                >
                  {alert.severity}
                </span>

              </td>

              <td>{alert.attack}</td>

              <td>{alert.ip}</td>

              <td>

                <span
                  className={`${statusColor(
                    alert.status
                  )} px-3 py-1 rounded-full text-sm`}
                >
                  {alert.status}
                </span>

              </td>

              <td>{alert.time}</td>

              <td>

                <div className="flex gap-3">

                  <button className="bg-cyan-500 hover:bg-cyan-600 px-3 py-2 rounded-lg">
                    <FaRobot />
                  </button>

                  <button className="bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-lg">
                    <FaEye />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AlertTable;
