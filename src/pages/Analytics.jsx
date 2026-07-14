import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import KPICards from "../components/analytics/KPICards";
import AttackTrend from "../components/analytics/AttackTrend";
import AttackBarChart from "../components/analytics/AttackBarChart";
import SeverityPie from "../components/analytics/SeverityPie";
import CountryTable from "../components/analytics/CountryTable";

function Analytics() {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 ml-64 p-6">

        <Navbar />

        {/* Page Header */}
        <h1 className="text-3xl font-bold mt-6">
          📈 Analytics Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Security insights and performance metrics.
        </p>

        {/* KPI Cards */}
        <KPICards />

        {/* Attack Trend */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8 shadow-lg">
          <AttackTrend />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mt-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
            <AttackBarChart />
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
            <SeverityPie />
          </div>

        </div>

        {/* Country Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8 shadow-lg">
          <CountryTable />
        </div>

      </div>

    </div>
  );
}

export default Analytics;