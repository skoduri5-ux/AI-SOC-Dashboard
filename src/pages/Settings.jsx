import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import ProfileSettings from "../components/settings/ProfileSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import APISettings from "../components/settings/APISettings";

function Settings() {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 ml-64 p-6">

        <Navbar />

        <h1 className="text-3xl font-bold mt-6">
          ⚙ Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Configure your SOC Dashboard preferences.
        </p>

        <ProfileSettings />

        <NotificationSettings />

        <SecuritySettings />

        <APISettings />

      </div>

    </div>
  );
}

export default Settings;