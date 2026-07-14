import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function ThreatIntel() {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 ml-64 p-6">

        <Navbar />

        <div className="mt-8">

          <h1 className="text-4xl font-bold">
            🌍 Threat Intelligence
          </h1>

          <p className="text-gray-400 mt-2">
            Monitor global cyber threats and intelligence feeds.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h2 className="text-xl font-semibold mb-4">
                Threat Score
              </h2>

              <div className="text-6xl font-bold text-red-500">
                91%
              </div>

              <p className="text-gray-400 mt-4">
                Overall Risk Level
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h2 className="text-xl font-semibold mb-4">
                Top Countries
              </h2>

              <ul className="space-y-3">
                <li>🇺🇸 USA — 45</li>
                <li>🇮🇳 India — 30</li>
                <li>🇨🇳 China — 25</li>
                <li>🇷🇺 Russia — 20</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ThreatIntel;
