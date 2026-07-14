import { useState } from "react";
import alerts from "../data/alerts";
import AlertModal from "../components/alerts/AlertModal";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import AlertFilters from "../components/alerts/AlertFilters";
import AlertTable from "../components/alerts/AlertTable";

function Alerts() {

  const [sortBy, setSortBy] = useState("newest");
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("");
  const [status, setStatus] = useState("");
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [showAIOnOpen, setShowAIOnOpen] = useState(false);
  const filteredAlerts = alerts.filter((alert) => {

    const matchesSearch =
      alert.attack.toLowerCase().includes(search.toLowerCase()) ||
      alert.ip.includes(search);

    const matchesSeverity =
      severity === "" || alert.severity === severity;

    const matchesStatus =
      status === "" || alert.status === status;

    return (
      matchesSearch &&
      matchesSeverity &&
      matchesStatus
    );
  });
  const sortedAlerts = [...filteredAlerts].sort((a, b) => {

    if (sortBy === "attack") {
      return a.attack.localeCompare(b.attack);
    }

    if (sortBy === "severity") {

      const order = {
        Critical: 1,
        High: 2,
        Medium: 3,
        Low: 4,
      };

      return order[a.severity] - order[b.severity];
    }

    if (sortBy === "oldest") {
      return a.id - b.id;
    }

    return b.id - a.id;

  });
function handleResolve(id) {
  console.log("Resolved:", id);

  window.alert(`✅ Alert #${id} resolved successfully!`);
}
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 ml-64 p-6">

        <Navbar />

        <h1 className="text-3xl font-bold mt-6">
          🚨 Security Alerts
        </h1>

        <p className="text-gray-400 mt-2">
          View, filter and investigate security incidents.
        </p>

        <AlertFilters
          search={search}
          setSearch={setSearch}
          severity={severity}
          setSeverity={setSeverity}
          status={status}
          setStatus={setStatus}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <AlertTable
          alerts={sortedAlerts}
          onView={setSelectedAlert}
          onResolve={handleResolve}
          onAnalyze={(alert) => {
            setSelectedAlert(alert);
            setShowAIOnOpen(true);
          }}
        />

        <AlertModal
          alert={selectedAlert}
          onClose={() => {
            setSelectedAlert(null);
            setShowAIOnOpen(false);
          }}
          onResolve={handleResolve}
          showAIOnOpen={showAIOnOpen}
        />
      </div>

    </div>
  );
}

export default Alerts;
