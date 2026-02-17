import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function FishLineChart({ data, seriesKeys }) {

  const formattedData = data.map(d => ({
    ...d,
    ปี: Number(d["ปี"])
  }));

  const colors = ["#22c55e", "#eab308", "#06b6d4", "#ef4444"];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="ปี"
          type="number"
          domain={["dataMin", "dataMax"]}
          interval={0}
        />

        <YAxis />

        <Tooltip />
        <Legend />

        {seriesKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index]}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default FishLineChart;
