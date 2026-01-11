import {
  UserGroupIcon,
  ArrowTrendingUpIcon,
  CurrencyRupeeIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import StatCard from "../components/StatCard";
// import RevenueBetsChart from "../components/RevenueBetsChart";

const Dashboard = () => {
  const recentBets = [
    { id: "B1001", user: "hiohosqooh", game: "Teen Patti", stake: 250, odds: "2.5x", result: "win", time: "2m ago" },
    { id: "B1002", user: "jkxhsihxs", game: "Andar Bahar", stake: 150, odds: "1.8x", result: "lose", time: "10m ago" },
   
  ];
  return (
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white">
          Welcome back
        </h1>
        <p className="text-gray-400 mt-1">
          Overview of the system performance
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="2"
          change="+12.5%"
          changeType="positive"
          icon={<UserGroupIcon className="w-6 h-6 text-blue-400" />}
          iconBg="#1e40af"
        />

        <StatCard
          title="Active Users"
          value="2"
          change="+8.2%"
          changeType="positive"
          icon={<ArrowTrendingUpIcon className="w-6 h-6 text-purple-400" />}
          iconBg="#4c1d95"
        />

        <StatCard
          title="Total Revenue"
          value="₹0.0K"
          change="+23.5%"
          changeType="positive"
          icon={<CurrencyRupeeIcon className="w-6 h-6 text-green-400" />}
          iconBg="#064e3b"
        />

        <StatCard
          title="Pending Withdrawals"
          value="0"
          change="-5.1%"
          changeType="negative"
          icon={<ClockIcon className="w-6 h-6 text-blue-300" />}
          iconBg="#1e3a8a"
        />
      </div>

       {/* ================= RECENT USERS + BETS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {/* Recent Users */}
        <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Users
          </h3>

          <div className="bg-[#0f172a]/80 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-white font-medium">hiohosqooh</p>
              <p className="text-gray-400 text-sm">
                jkxhsihxs@gmail.com
              </p>
            </div>

            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
              active
            </span>
          </div>
        </div>

        {/* Recent Bets */}
        <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Bets</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">Bet ID</th>
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">User</th>
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">Game</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Stake</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Odds</th>
                  <th className="px-3 py-2 text-center text-sm font-medium text-gray-300">Result</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Time</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800">
                {recentBets.map((b) => (
                  <tr key={b.id} className="hover:bg-white/2 transition-colors">
                    <td className="px-3 py-3 text-sm text-gray-300">{b.id}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xs font-semibold">{b.user[0]}</div>
                        <div className="text-sm text-white">{b.user}</div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-300">{b.game}</td>
                    <td className="px-3 py-3 text-sm text-right text-white">₹{b.stake}</td>
                    <td className="px-3 py-3 text-sm text-right text-gray-300">{b.odds}</td>
                    <td className="px-3 py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        b.result === 'win' ? 'bg-green-600 text-white' : b.result === 'lose' ? 'bg-red-600 text-white' : 'bg-yellow-700 text-white'
                      }`}>{b.result}</span>
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-400 text-right">{b.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= FINANCIAL OVERVIEW ================= */}
      <div className="mt-10 rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-6">
          Financial Overview
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deposits */}
          <div className="bg-[#0f172a]/80 rounded-xl p-6">
            <p className="text-gray-400 mb-2">Total Deposits</p>
            <h2 className="text-2xl font-bold text-green-400">
              ₹0.0K
            </h2>
          </div>

          {/* Withdrawals */}
          <div className="bg-[#0f172a]/80 rounded-xl p-6">
            <p className="text-gray-400 mb-2">Total Withdrawals</p>
            <h2 className="text-2xl font-bold text-red-400">
              ₹0.0K
            </h2>
          </div>

          {/* Today Revenue */}
          <div className="bg-[#0f172a]/80 rounded-xl p-6">
            <p className="text-gray-400 mb-2">Today's Revenue</p>
            <h2 className="text-2xl font-bold text-blue-400">
              ₹0
            </h2>
          </div>
          {/* ================= CHART SECTION ================= */}
{/* <div className="mt-10">
  <RevenueBetsChart />
</div> */}
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;
