import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { attackTypes } from "../../data/analytics";

function AttackBarChart() {
  return (
    <>
      <h2 className="text-xl font-bold mb-5">
        Attack Types
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={attackTypes}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="value"
            fill="#06b6d4"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default AttackBarChart;
