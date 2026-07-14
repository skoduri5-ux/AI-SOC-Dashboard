import { useState } from "react";

function SecuritySettings() {
  const [mfa, setMfa] = useState(true);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">

      <h2 className="text-xl font-bold mb-6">
        🔐 Security
      </h2>

      <div className="space-y-5">

        <button className="bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-lg">
          Change Password
        </button>

        <label className="flex justify-between items-center">

          <span>Enable Two-Factor Authentication</span>

          <input
            type="checkbox"
            checked={mfa}
            onChange={() => setMfa(!mfa)}
          />

        </label>

        <div>

          <label className="block mb-2">
            Session Timeout
          </label>

          <select className="w-full bg-slate-800 rounded-lg p-3">

            <option>15 Minutes</option>

            <option>30 Minutes</option>

            <option>1 Hour</option>

            <option>Never</option>

          </select>

        </div>

      </div>

    </div>
  );
}

export default SecuritySettings;
