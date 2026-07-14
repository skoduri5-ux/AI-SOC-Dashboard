import { useState } from "react";
import axios from "axios";
function APISettings() {
  const [apiUrl, setApiUrl] = useState(
    "http://localhost:5000/"
  );

  const [aiEndpoint, setAiEndpoint] = useState(
    "http://localhost:5000/api/ai/analyze"
  );

  async function testConnection() {
    try {
      // Test Backend
      await axios.get(apiUrl);

      // Test AI Endpoint
      await axios.get(aiEndpoint);

      alert("✅ Backend & AI Endpoint Connected");
    } catch (error) {
      if (error.response) {
        alert(`❌ Endpoint Error (${error.response.status})`);
      } else {
        alert("❌ Cannot connect to server");
      }
    }
  }
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">

      <h2 className="text-xl font-bold mb-6">
        🌐 API Configuration
      </h2>

      <div className="space-y-4">

        <div>

          <label className="block mb-2">
            Backend API URL
          </label>

          <input
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            className="w-full bg-slate-800 rounded-lg p-3 outline-none"
          />

        </div>

        <div>

          <label className="block mb-2">
            AI Endpoint
          </label>

          <input
            value={aiEndpoint}
            onChange={(e) => setAiEndpoint(e.target.value)}
            className="w-full bg-slate-800 rounded-lg p-3 outline-none"
          />

        </div>

        <button
          onClick={testConnection}
          className="bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-lg"
        >
          Test Connection
        </button>

      </div>

    </div>
  );
}

export default APISettings;
