import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaExclamationTriangle,
  FaFileAlt,
  FaChartLine,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  const menu = [
    {
      icon: <FaTachometerAlt />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FaExclamationTriangle />,
      text: "Alerts",
      path: "/alerts",
    },
    {
      icon: <FaFileAlt />,
      text: "Logs",
      path: "/logs",
    },
    {
      icon: <FaChartLine />,
      text: "Analytics",
      path: "/analytics",
    },
    {
      icon: <FaShieldAlt />,
      text: "Threat Intel",
      path: "/threat-intel",
    },
    {
      icon: <FaCog />,
      text: "Settings",
      path: "/settings",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 border-r border-slate-800 text-white flex flex-col">

      {/* Logo */}
      <div className="px-6 py-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-cyan-400">
          🛡 AI-SOC
        </h1>

      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6">

        <ul className="space-y-3">

          {menu.map((item) => (
            <li key={item.text}>

              <Link
                to={item.path}
                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-cyan-600 transition duration-200"
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.text}
                </span>

              </Link>

            </li>
          ))}

        </ul>

      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800 text-center text-xs text-gray-500">
        AI-SOC Dashboard v1.0
      </div>

    </aside>
  );
}

export default Sidebar;