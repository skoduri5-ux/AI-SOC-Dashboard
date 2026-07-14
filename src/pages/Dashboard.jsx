import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import DashboardBottom from "../components/dashboard/DashboardBottom";

function Dashboard() {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 ml-64 p-6">

        <Navbar />

        <DashboardStats />

        <DashboardCharts />

        <DashboardBottom />

      </div>

    </div>
  );
}

export default Dashboard;