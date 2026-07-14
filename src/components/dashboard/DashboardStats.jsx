import StatCard from "../cards/StatCard";
import dashboardStats from "../../data/dashboardStats";

function DashboardStats() {
  return (
    <div className="grid grid-cols-4 gap-5 mt-6">

      {dashboardStats.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          trend={card.trend}
          color={card.color}
          icon={card.icon}
        />
      ))}

    </div>
  );
}

export default DashboardStats;
