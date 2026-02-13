import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function FishLineChart({ data, seriesKeys }) {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ปี" />
          <YAxis />
          <Tooltip />
          <Legend />
          {seriesKeys.map((k, i) => (
            <Line
              key={k}
              type="monotone"
              dataKey={k}
              dot={false}
              strokeWidth={2}
              stroke={`hsl(${(i * 45) % 360} 70% 45%)`}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
