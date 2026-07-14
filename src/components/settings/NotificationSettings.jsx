import { useState } from "react";

function NotificationSettings() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [desktopNotifications, setDesktopNotifications] = useState(true);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">

      <h2 className="text-xl font-bold mb-6">
        🔔 Notifications
      </h2>

      <div className="space-y-4">

        <label className="flex justify-between items-center">
          <span>Email Alerts</span>
          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={() => setEmailAlerts(!emailAlerts)}
          />
        </label>

        <label className="flex justify-between items-center">
          <span>Critical Threat Alerts</span>
          <input
            type="checkbox"
            checked={criticalAlerts}
            onChange={() => setCriticalAlerts(!criticalAlerts)}
          />
        </label>

        <label className="flex justify-between items-center">
          <span>Weekly Reports</span>
          <input
            type="checkbox"
            checked={weeklyReports}
            onChange={() => setWeeklyReports(!weeklyReports)}
          />
        </label>

        <label className="flex justify-between items-center">
          <span>Desktop Notifications</span>
          <input
            type="checkbox"
            checked={desktopNotifications}
            onChange={() =>
              setDesktopNotifications(!desktopNotifications)
            }
          />
        </label>

      </div>

    </div>
  );
}

export default NotificationSettings;
