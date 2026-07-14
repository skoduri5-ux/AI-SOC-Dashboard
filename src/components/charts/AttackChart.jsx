import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", attacks: 25 },
  { day: "Tue", attacks: 42 },
  { day: "Wed", attacks: 31 },
  { day: "Thu", attacks: 58 },
  { day: "Fri", attacks: 46 },
  { day: "Sat", attacks: 72 },
  { day: "Sun", attacks: 61 },
];

function AttackChart() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Attack Trend
          </h2>

          <p className="text-gray-400">
            Last 7 Days
          </p>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg">
          Export
        </button>

      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>

          <defs>

            <linearGradient id="colorAttack" x1="0" y1="0" x2="0" y2="1">

              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />

              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />

            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

          <XAxis
            dataKey="day"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="attacks"
            stroke="#06b6d4"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#colorAttack)"
          />

        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default AttackChart;
