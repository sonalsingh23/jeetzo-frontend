import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid, Legend } from "recharts";

const revenueData = [
  { day: "Jan 01", revenue: 1200, bets: 34 },
  { day: "Jan 02", revenue: 900, bets: 28 },
  { day: "Jan 03", revenue: 1500, bets: 45 },
  { day: "Jan 04", revenue: 700, bets: 18 },
  { day: "Jan 05", revenue: 1800, bets: 52 },
];

const Reports = () => {
  const totalRevenue = revenueData.reduce((s, r) => s + r.revenue, 0);
  const totalBets = revenueData.reduce((s, r) => s + r.bets, 0);

  return (
    <div className="p-6 md:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Reports</h1>
        <p className="text-gray-400 mt-1">Financial and activity reports overview.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl p-4 bg-[#081224]/60 border border-white/6">
          <p className="text-sm text-gray-300">Total Revenue</p>
          <div className="text-2xl font-bold text-white mt-2">₹{totalRevenue}</div>
        </div>
        <div className="rounded-xl p-4 bg-[#081224]/60 border border-white/6">
          <p className="text-sm text-gray-300">Total Bets</p>
          <div className="text-2xl font-bold text-white mt-2">{totalBets}</div>
        </div>
        <div className="rounded-xl p-4 bg-[#081224]/60 border border-white/6">
          <p className="text-sm text-gray-300">Avg Revenue / Day</p>
          <div className="text-2xl font-bold text-white mt-2">₹{Math.round(totalRevenue / revenueData.length)}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-4">
          <h3 className="text-lg font-semibold text-white mb-3">Revenue (last 5 days)</h3>
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <LineChart data={revenueData}>
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#7c3aed" strokeWidth={3} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-4">
          <h3 className="text-lg font-semibold text-white mb-3">Bets Count</h3>
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#0b1220" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="bets" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-4 mt-6">
        <h3 className="text-lg font-semibold text-white mb-3">Top Days</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">Day</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Revenue</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Bets</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {revenueData.map((r) => (
                <tr key={r.day} className="hover:bg-white/2 transition-colors">
                  <td className="px-3 py-3 text-sm text-gray-300">{r.day}</td>
                  <td className="px-3 py-3 text-sm text-right text-white">₹{r.revenue}</td>
                  <td className="px-3 py-3 text-sm text-right text-gray-300">{r.bets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
