import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", revenue: 1200, bets: 30 },
  { name: "Tue", revenue: 2100, bets: 45 },
  { name: "Wed", revenue: 800, bets: 20 },
  { name: "Thu", revenue: 1600, bets: 38 },
  { name: "Fri", revenue: 2400, bets: 55 },
  { name: "Sat", revenue: 1900, bets: 42 },
  { name: "Sun", revenue: 2700, bets: 60 },
];

const RevenueBetsChart = () => {
  return (
    <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-6">
      <h3 className="text-lg font-semibold text-white mb-6">
        Revenue & Bets (Last 7 Days)
      </h3>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                borderRadius: "8px",
                border: "1px solid #334155",
              }}
              labelStyle={{ color: "#e5e7eb" }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="bets"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Revenue
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          Bets
        </div>
      </div>
    </div>
  );
};

export default RevenueBetsChart;
