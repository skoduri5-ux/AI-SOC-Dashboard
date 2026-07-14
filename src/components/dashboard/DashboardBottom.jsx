import AlertTable from "../tables/AlertTable";
import Assistant from "../ai/Assistant";
import ActivityFeed from "../activity/ActivityFeed";

function DashboardBottom() {
  return (
    <div className="mt-8 space-y-8">

      {/* Security Alerts */}
      <div>
        <AlertTable />
      </div>

      {/* Live Activity */}
      <div>
        <ActivityFeed />
      </div>

      {/* AI Assistant */}
      <div>
        <Assistant />
      </div>

    </div>
  );
}

export default DashboardBottom;