import { useState } from "react";

function ProfileSettings() {
  const [name, setName] = useState("Shashank");
  const [email, setEmail] = useState("shashank@gitam.edu");

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">

      <h2 className="text-xl font-bold mb-6">
        👤 Profile
      </h2>

      <div className="space-y-4">

        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full bg-slate-800 rounded-lg p-3"
        />

        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full bg-slate-800 rounded-lg p-3"
        />

        <button className="bg-cyan-600 px-5 py-3 rounded-lg">
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default ProfileSettings;
