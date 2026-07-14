import { FaEye, FaRobot, FaCheck } from "react-icons/fa";

function AlertTable({
  alerts,
  onView,
  onResolve,
  onAnalyze,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6">

      <table className="w-full text-white">

        <thead>

          <tr className="border-b border-slate-700">

            <th>ID</th>
            <th>Severity</th>
            <th>Attack</th>
            <th>IP</th>
            <th>Status</th>
            <th>Time</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {alerts.map((alert) => (

            <tr
              key={alert.id}
              className="border-b border-slate-800 hover:bg-slate-800"
            >

              <td className="py-4">{alert.id}</td>

              <td>{alert.severity}</td>

              <td>{alert.attack}</td>

              <td>{alert.ip}</td>

              <td>{alert.status}</td>

              <td>{alert.time}</td>

              <td>
                <div className="flex gap-3">

                  {/* View */}
                  <button
                    onClick={() => onView(alert)}
                    className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded"
                  >
                    <FaEye />
                  </button>

                  {/* AI */}
                  <button
                    onClick={() => onView(alert)}
                    className="bg-orange-500 hover:bg-orange-600 p-2 rounded"
                    title="Open Alert"
                  >
                    <FaRobot />
                  </button>

                  {/* Resolve */}
                  <button
                    onClick={() => onResolve(alert.id)}
                    className="bg-green-500 hover:bg-green-600 p-2 rounded"
                  >
                    <FaCheck />
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
