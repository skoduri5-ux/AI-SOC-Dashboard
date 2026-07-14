import AttackChart from "../charts/AttackChart";
import ThreatPieChart from "../charts/ThreatPieChart";

function DashboardCharts() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">

      <div className="col-span-2 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <AttackChart />
      </div>

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

        <h2 className="text-xl font-bold mb-6">
          Threat Distribution
        </h2>

        <ThreatPieChart />

      </div>

    </div>
  );
}

export default DashboardCharts;
