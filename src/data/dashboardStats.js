import {
  FaBug,
  FaShieldAlt,
  FaUsers,
  FaServer,
} from "react-icons/fa";

const dashboardStats = [
  {
    title: "Total Alerts",
    value: "2456",
    trend: "+12%",
    color: "text-cyan-400",
    icon: FaBug,
  },
  {
    title: "Critical",
    value: "18",
    trend: "-2%",
    color: "text-red-500",
    icon: FaShieldAlt,
  },
  {
    title: "Users Online",
    value: "124",
    trend: "+6%",
    color: "text-green-400",
    icon: FaUsers,
  },
  {
    title: "Firewall",
    value: "99.9%",
    trend: "Healthy",
    color: "text-yellow-400",
    icon: FaServer,
  },
];

export default dashboardStats;