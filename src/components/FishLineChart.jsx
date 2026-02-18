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
  const formattedData = data.map((d) => ({
    ...d,
    ปี: Number(d["ปี"]),
  }));

  const colors = ["#0ea5e9", "#22c55e", "#f59e0b", "#ef4444"];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={formattedData}
        margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />

        <XAxis
          dataKey="ปี"
          type="number"
          domain={["dataMin", "dataMax"]}
          tick={{ fontSize: 12 }}
          tickMargin={8}
          minTickGap={20}   // 🔥 แก้ปีชนกัน
        />

        <YAxis
          tick={{ fontSize: 12 }}
          tickMargin={8}
          width={60}
        />

        <Tooltip
          contentStyle={{
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}
          labelStyle={{ fontWeight: "bold" }}
        />

        <Legend
          wrapperStyle={{
            fontSize: "12px",
            paddingTop: "10px",
          }}
        />

        {seriesKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index % colors.length]}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default FishLineChart;
