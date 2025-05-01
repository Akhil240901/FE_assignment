//
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#52c41a", "#ff4d4f", "#faad14", "#d9d9d9"];

export const PieChartR = ({ data }) => {
  // Normalize data to array of objects with `name` and `value`
  let chartData = [];

  if (Array.isArray(data)) {
    chartData = data;
  } else if (typeof data === "object" && data !== null) {
    chartData = Object.entries(data).map(([key, value]) => ({
      name: key,
      value,
    }));
  }

  return (
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
