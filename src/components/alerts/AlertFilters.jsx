import { FaSearch } from "react-icons/fa";

function AlertFilters({
  search,
  setSearch,
  severity,
  setSeverity,
  status,
  setStatus,
  sortBy,
  setSortBy
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mt-6">

      <div className="flex gap-4">

        <div className="flex items-center bg-slate-800 rounded-lg px-4 flex-1">
          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search alerts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-white ml-3 w-full py-3"
          />
        </div>

        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="bg-slate-800 rounded-lg px-4"
        >
          <option value="">All Severity</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-slate-800 rounded-lg px-4"
        >
          <option value="">All Status</option>
          <option>Blocked</option>
          <option>Investigating</option>
          <option>Monitoring</option>
          <option>Resolved</option>
        </select>

        <select
          value={sortBy}
          onChange={(e)=>setSortBy(e.target.value)}
          className="bg-slate-800 rounded-lg px-4"
      >

          <option value="newest">Newest</option>

          <option value="oldest">Oldest</option>

          <option value="severity">Severity</option>

          <option value="attack">Attack Name</option>

      </select>

      </div>
    </div>
  );

}

export default AlertFilters;
