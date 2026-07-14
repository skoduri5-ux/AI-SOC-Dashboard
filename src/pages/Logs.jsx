import { useState } from "react";
import { saveAs } from "file-saver";

import logsData from "../data/logs";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import LogFilters from "../components/logs/LogFilters";
import LogTable from "../components/logs/LogTable";

function Logs() {
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");

  // Filter logs
  const filteredLogs = logsData.filter((log) => {
    const matchesSearch =
      log.event.toLowerCase().includes(search.toLowerCase()) ||
      log.ip.includes(search) ||
      log.user.toLowerCase().includes(search.toLowerCase());

    const matchesSource =
      source === "" || log.source === source;

    return matchesSearch && matchesSource;
  });

  // Export CSV
  function exportCSV() {
    const headers = [
      "Time",
      "Source",
      "Event",
      "User",
      "IP",
      "Status",
    ];

    const rows = filteredLogs.map((log) => [
      log.time,
      log.source,
      log.event,
      log.user,
      log.ip,
      log.status,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "soc_logs.csv");
  }

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 ml-64 p-6">

        <Navbar />

        <h1 className="text-3xl font-bold mt-6">
          📜 System Logs
        </h1>

        <p className="text-gray-400 mt-2">
          Search and monitor system activity.
        </p>

        <div className="flex items-end justify-between gap-6 mt-6">

          <div className="flex-1">

            <LogFilters
              search={search}
              setSearch={setSearch}
              source={source}
              setSource={setSource}
            />

          </div>

          <button
            onClick={exportCSV}
            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition"
          >
            📥 Export Logs
          </button>

        </div>

        <LogTable logs={filteredLogs} />

      </div>

    </div>
  );
}

export default Logs;