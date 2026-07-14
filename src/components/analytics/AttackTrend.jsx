import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { weeklyAttacks } from "../../data/analytics";

function AttackTrend() {
  return (
    <>
      <h2 className="text-xl font-bold mb-5">
        Weekly Attack Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weeklyAttacks}>
          <CartesianGrid stroke="#374151" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Line
            dataKey="attacks"
            stroke="#06b6d4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default AttackTrend;
