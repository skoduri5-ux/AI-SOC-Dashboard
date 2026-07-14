import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { severityData } from "../../data/analytics";

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
];

function SeverityPie() {
  return (
    <>
      <h2 className="text-xl font-bold mb-5">
        Threat Severity
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={severityData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {severityData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default SeverityPie;
