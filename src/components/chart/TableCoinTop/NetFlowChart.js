// NetFlowChart.jsx
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Tạo dữ liệu 12 tháng
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Tạo dữ liệu 12 tháng (bi-monthly)
const generateBiMonthlyData = () => {
  const result = [];
  let balance = 50;

  let month = 0; // tháng bắt đầu từ 0 để dùng với mảng
  let year = 2024;

  for (let i = 0; i < 30; i++) {
    const incoming = Math.floor(Math.random() * 30) + 10;
    const outgoing = -Math.floor(Math.random() * 25) - 5;
    balance += incoming + outgoing;

    result.push({
      date: `${monthNames[month]} ${2024}`, // ✅ hiển thị tháng dạng chữ
      incoming,
      outgoing,
      balance,
    });

    // Tăng thêm 2 tháng
    month += 2;
    if (month > 11) {
      month -= 12;
      year += 1;
    }
  }

  return result;
};

const data = generateBiMonthlyData();

export default function NetFlowChart() {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "20px",
        borderRadius: "12px",
        color: "#fff",
        overflowX: "auto", // ✅ Cho phép cuộn ngang nếu cần
        position: "absolute",
        top: "50%",
        right: "1%",
      }}
    >
      <h2
        style={{
          marginBottom: "16px",
          fontSize: "20px",
          fontWeight: "bold",
          marginRight: "33%",
          color: "#76E1DB",
        }}
      >
        Stablecoin Exchange Net Flow{" "}
      </h2>

      {/* ✅ Đây là phần chứa biểu đồ với chiều ngang rộng hơn */}
      <div style={{ minWidth: "550px" }}>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            a
            <CartesianGrid stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis
              yAxisId="left"
              stroke="#22c55e"
              label={{ value: "Flow", angle: -90, position: "insideLeft" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#38bdf8"
              label={{ value: "Balance", angle: -90, position: "insideRight" }}
            />
            <Tooltip
              contentStyle={{
                background: "#1e293b",
                border: "none",
                color: "#fff",
              }}
            />
            <Legend verticalAlign="top" height={36} />
            <Bar
              yAxisId="left"
              dataKey="incoming"
              fill="#22c55e"
              name="Incoming"
              barSize={16}
            />
            <Bar
              yAxisId="left"
              dataKey="outgoing"
              fill="#ef4444"
              name="Outgoing"
              barSize={16}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="balance"
              stroke="#38bdf8"
              strokeWidth={3}
              name="Balance"
              dot={{ r: 3 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
