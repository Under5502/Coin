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

// Format số có đuôi M/B
const formatNumber = (num) => {
  if (Math.abs(num) >= 1_000_000_000)
    return (num / 1_000_000_000).toFixed(1) + "B";
  if (Math.abs(num) >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  return num;
};

// Tạo dữ liệu mẫu giống hình
// Tạo dữ liệu nhiều cột hơn (30 điểm dữ liệu)
const generateChartData = () => {
  const result = [];
  let netAssets = 300_000_000;
  for (let i = 0; i < 30; i++) {
    const date = `2024.${(i + 1).toString().padStart(2, "0")}`; // 01 → 30
    const inflow = Math.floor(Math.random() * 800_000_000); // tăng max inflow
    const outflow = -Math.floor(Math.random() * 800_000_000); // tăng max outflow
    netAssets += inflow + outflow;
    const btcPrice = 60000 + Math.random() * 20000;

    result.push({
      date,
      inflow,
      outflow,
      netAssets,
      btcPrice,
    });
  }
  return result;
};

const data = generateChartData();

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const btc = payload.find((p) => p.name === "BTC Price");
    const inflow = payload.find((p) => p.name === "Inflow");
    const netAssets = payload.find((p) => p.name === "Net Assets");

    return (
      <div
        style={{
          background: "#1e293b",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #334155",
          color: "#fff",
          fontSize: "14px",
          position: "absolute",
          right: "42%",
          top: "50%",
        }}
      >
        <div>{label}</div>
        <div style={{ color: "#38bdf8" }}>
          • BTC Price: ${btc?.value?.toFixed(2)}
        </div>
        <div style={{ color: "#22c55e" }}>
          • Inflow: {formatNumber(inflow?.value)}
        </div>
        <div style={{ color: "#38bdf8" }}>
          • Net Assets: {formatNumber(netAssets?.value)}
        </div>
      </div>
    );
  }
  return null;
};

export default function BitcoinExchange() {
  return (
    <div
      style={{
        background: "#0f172a",
        borderRadius: "16px",
        padding: "20px",
        color: "#fff",
        fontFamily: "sans-serif",
        position: "absolute",
        top: "50%",
        right: "42%",
      }}
    >
      <h2
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "12px",
          marginRight: "60%",
          color: "#76E1DB",
        }}
      >
        Bitcoin Exchange Net Flow
      </h2>
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "10px",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            color: "#38bdf8",
            borderBottom: "2px solid #38bdf8",
            paddingBottom: "4px",
          }}
        >
          Flows (USD)
        </div>
        <div style={{ color: "#94a3b8", cursor: "pointer" }}>AUM</div>
        <div style={{ color: "#94a3b8", cursor: "pointer" }}>Market Cap</div>
        <div style={{ color: "#94a3b8", cursor: "pointer" }}>Volume</div>
      </div>

      <div style={{ minWidth: "600px", height: "276px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis
              yAxisId="left"
              stroke="#22c55e"
              tickFormatter={formatNumber}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#38bdf8"
              tickFormatter={formatNumber}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} />
            <Bar
              yAxisId="left"
              dataKey="inflow"
              name="Inflow"
              fill="#22c55e"
              barSize={10}
            />
            <Bar
              yAxisId="left"
              dataKey="outflow"
              name="Outgoing"
              fill="#ef4444"
              barSize={10}
            />
            <Line
              yAxisId="right"
              dataKey="netAssets"
              name="Net Assets"
              stroke="#38bdf8"
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              yAxisId="right"
              dataKey="btcPrice"
              name="BTC Price"
              stroke="#94a3b8"
              strokeDasharray="3 3"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
