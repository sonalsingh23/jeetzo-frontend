import { useMemo, useState } from "react";
import { EyeIcon, ArrowPathIcon, TrashIcon } from "@heroicons/react/24/solid";

const sampleBets = [
  { id: "B2001", user: "Aarav", game: "Teen Patti", stake: 250, odds: "2.5x", payout: 625, result: "win", time: "2026-01-05 12:03" },
  { id: "B2002", user: "Meera", game: "Roulette", stake: 100, odds: "0.0x", payout: 0, result: "lose", time: "2026-01-05 11:40" },
  { id: "B2003", user: "Rohan", game: "Andar Bahar", stake: 500, odds: "3.2x", payout: null, result: "pending", time: "2026-01-05 10:12" },
  { id: "B2004", user: "player4", game: "Slots", stake: 75, odds: "1.5x", payout: 112.5, result: "win", time: "2026-01-04 19:50" },
];

const Bets = () => {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return sampleBets.filter((b) => {
      if (status !== "all" && b.result !== status) return false;
      if (!q) return true;
      const s = q.toLowerCase();
      return b.id.toLowerCase().includes(s) || b.user.toLowerCase().includes(s) || b.game.toLowerCase().includes(s);
    });
  }, [q, status]);

  return (
    <div className="p-6 md:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Bets</h1>
        <p className="text-gray-400 mt-1">View and manage recent bets.</p>
      </div>

      <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 w-full md:w-1/2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by ID, user, or game"
              className="w-full bg-[#0b1220]/60 border border-white/6 rounded-md px-3 py-2 text-sm text-white focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="bg-[#0b1220]/60 border border-white/6 rounded-md px-3 py-2 text-sm text-white">
              <option value="all">All</option>
              <option value="win">Win</option>
              <option value="lose">Lose</option>
              <option value="pending">Pending</option>
            </select>

            <button className="px-3 py-2 bg-white/4 hover:bg-white/6 rounded-md text-white inline-flex items-center gap-2">
              <ArrowPathIcon className="w-4 h-4" /> Refresh
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">Bet ID</th>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">User</th>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">Game</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Stake</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Odds</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Payout</th>
                <th className="px-3 py-2 text-center text-sm font-medium text-gray-300">Result</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Time</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-3 py-6 text-center text-gray-400">No bets found</td>
                </tr>
              ) : (
                filtered.map((b) => (
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
                    <td className="px-3 py-3 text-sm text-right text-gray-300">{b.payout != null ? `₹${b.payout}` : "—"}</td>
                    <td className="px-3 py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        b.result === 'win' ? 'bg-green-600 text-white' : b.result === 'lose' ? 'bg-red-600 text-white' : 'bg-yellow-700 text-white'
                      }`}>{b.result}</span>
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-400 text-right">{b.time}</td>
                    <td className="px-3 py-3 text-right text-sm">
                      <button aria-label={`view-${b.id}`} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/3 hover:bg-white/6 text-white mr-2">
                        <EyeIcon className="w-4 h-4" />
                      </button>

                      <button aria-label={`cancel-${b.id}`} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bets;
