import {
  FaBug,
  FaShieldAlt,
  FaUser,
  FaServer,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaBug />,
    color: "text-red-500",
    title: "SQL Injection blocked",
    time: "10:31 AM",
  },
  {
    icon: <FaShieldAlt />,
    color: "text-orange-400",
    title: "Brute Force detected",
    time: "10:35 AM",
  },
  {
    icon: <FaUser />,
    color: "text-green-400",
    title: "Admin logged in",
    time: "10:42 AM",
  },
  {
    icon: <FaServer />,
    color: "text-cyan-400",
    title: "Firewall updated",
    time: "10:48 AM",
  },
];

function ActivityFeed() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-6">
        📡 Live Activity
      </h2>

      <div className="space-y-5">

        {activities.map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-4 border-b border-slate-800 pb-4"
          >

            <div className={`text-2xl ${item.color}`}>
              {item.icon}
            </div>

            <div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ActivityFeed;
