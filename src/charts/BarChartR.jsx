import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

export function BarChartR({ data }) {
  const chartData = Object.entries(data).map(([name, value], index) => ({
    name,
    value,
  }));

  const colors = ["#DC2626", "#F59E0B", "#3B82F6", "#10B981"];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart layout="vertical" data={chartData}>
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="value">
          {chartData.map((entry, index) => (
            <Cell key={index} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
