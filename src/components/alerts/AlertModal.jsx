import { useState } from "react";
import {
  FaTimes,
  FaRobot,
  FaCheckCircle,
  FaDownload,
} from "react-icons/fa";

function AlertModal({ alert, onClose, onResolve }) {
  const [showAI, setShowAI] = useState(false);

  if (!alert) return null;

  const aiAnalysis = {
    "SQL Injection": {
      risk: "Critical",
      summary:
        "SQL Injection attempts indicate an attacker is trying to execute malicious SQL commands.",
      recommendations: [
        "Use parameterized queries",
        "Enable WAF SQL rules",
        "Review database logs",
        "Validate all user input",
      ],
    },

    "Brute Force": {
      risk: "High",
      summary:
        "Repeated authentication attempts indicate a brute-force attack.",
      recommendations: [
        "Enable MFA",
        "Lock accounts after failed attempts",
        "Rate-limit login requests",
        "Block suspicious IP addresses",
      ],
    },

    "Port Scan": {
      risk: "Medium",
      summary:
        "A port scan suggests reconnaissance activity before an attack.",
      recommendations: [
        "Monitor the source IP",
        "Review firewall rules",
        "Check IDS alerts",
        "Restrict unnecessary ports",
      ],
    },
  };

  const analysis = aiAnalysis[alert.attack] || {
    risk: "Unknown",
    summary: "No AI analysis available for this attack type.",
    recommendations: [
      "Review the incident manually.",
    ],
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-slate-900 w-[750px] rounded-2xl border border-slate-700 shadow-2xl">

        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b border-slate-700">

          <div>

            <h2 className="text-2xl font-bold text-white">
              🚨 Alert #{alert.id}
            </h2>

            <p className="text-gray-400">
              Incident Details
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-white"
          >
            <FaTimes />
          </button>

        </div>

        {/* Content */}

        <div className="p-6 space-y-6">

          {/* Alert Information */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-xl p-5">

              <h3 className="text-cyan-400 font-semibold mb-4">
                Alert Information
              </h3>

              <p><strong>Attack:</strong> {alert.attack}</p>

              <p><strong>Severity:</strong> {alert.severity}</p>

              <p><strong>Source IP:</strong> {alert.ip}</p>

              <p><strong>Status:</strong> {alert.status}</p>

              <p><strong>Time:</strong> {alert.time}</p>

            </div>

            <div className="bg-slate-800 rounded-xl p-5">

              <h3 className="text-cyan-400 font-semibold mb-4">
                Recommended Actions
              </h3>

              <ul className="space-y-2 text-gray-300">

                <li>✔ Block Source IP</li>

                <li>✔ Review Firewall Logs</li>

                <li>✔ Notify SOC Team</li>

                <li>✔ Investigate Endpoint</li>

              </ul>

            </div>

          </div>

          {/* Timeline */}

          <div className="bg-slate-800 rounded-xl p-5">

            <h3 className="text-cyan-400 font-semibold mb-4">
              Incident Timeline
            </h3>

            <div className="space-y-2">

              <p>🕒 10:31 Attack Detected</p>

              <p>🛡 10:32 Firewall Blocked IP</p>

              <p>👨‍💻 10:33 Analyst Assigned</p>

              <p>📄 10:35 Investigation Started</p>

            </div>

          </div>

          {/* AI Analysis */}

          {showAI && (

            <div className="bg-slate-800 rounded-xl p-5 border border-cyan-600">

              <h3 className="text-cyan-400 font-bold text-xl mb-4">
                🤖 AI Security Analysis
              </h3>

              <p className="mb-3">

                <strong>Risk Level:</strong>

                <span className="text-red-400 ml-2">
                  {analysis.risk}
                </span>

              </p>

              <p className="text-gray-300 leading-7">
                {analysis.summary}
              </p>

              <h4 className="mt-5 font-semibold text-white">
                Recommendations
              </h4>

              <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">

                {analysis.recommendations.map((item, index) => (

                  <li key={index}>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          )}

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 p-6 border-t border-slate-700">

          <button
            onClick={() => setShowAI(!showAI)}
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <FaRobot />
            {showAI ? "Hide AI" : "AI Analyze"}
          </button>

          <button
            onClick={() => {
              onResolve(alert.id);
              onClose();
            }}
            className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <FaCheckCircle />
            Resolve
          </button>

          <button
            onClick={() => window.print()}
            className="bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <FaDownload />
            Report
          </button>

        </div>

      </div>

    </div>
  );
}

export default AlertModal;