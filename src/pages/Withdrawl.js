import { useMemo, useState } from "react";
import { CheckIcon, XMarkIcon, EyeIcon } from "@heroicons/react/24/solid";

const sampleRequests = [
  { id: "W4001", user: "Aarav Sharma", method: "UPI", amount: 2500, status: "pending", date: "2026-01-05 09:12" },
  { id: "W4002", user: "Meera Patel", method: "Bank", amount: 5000, status: "approved", date: "2026-01-04 14:22" },
  { id: "W4003", user: "Rohan Iyer", method: "Wallet", amount: 1200, status: "rejected", date: "2026-01-03 11:03" },
];

const Withdrawl = () => {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return sampleRequests.filter((r) => {
      if (status !== "all" && r.status !== status) return false;
      if (!q) return true;
      const s = q.toLowerCase();
      return r.id.toLowerCase().includes(s) || r.user.toLowerCase().includes(s) || r.method.toLowerCase().includes(s);
    });
  }, [q, status]);

  return (
    <div className="p-6 md:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Withdrawals</h1>
        <p className="text-gray-400 mt-1">Manage withdrawal requests and payouts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="rounded-xl p-4 bg-gradient-to-br from-[#061022]/60 to-[#091428]/60 border border-white/6">
          <p className="text-sm text-gray-300">Total Requests</p>
          <div className="text-2xl font-bold text-white mt-2">{sampleRequests.length}</div>
        </div>

        <div className="rounded-xl p-4 bg-gradient-to-br from-[#061022]/60 to-[#091428]/60 border border-white/6">
          <p className="text-sm text-gray-300">Pending</p>
          <div className="text-2xl font-bold text-white mt-2">{sampleRequests.filter(r=>r.status==='pending').length}</div>
        </div>

        <div className="rounded-xl p-4 bg-gradient-to-br from-[#061022]/60 to-[#091428]/60 border border-white/6">
          <p className="text-sm text-gray-300">Total Amount</p>
          <div className="text-2xl font-bold text-white mt-2">₹{sampleRequests.reduce((s,r)=> s + r.amount,0)}</div>
        </div>
      </div>

      <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 w-full md:w-1/2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by ID, user, or method"
              className="w-full bg-[#0b1220]/60 border border-white/6 rounded-md px-3 py-2 text-sm text-white focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="bg-[#0b1220]/60 border border-white/6 rounded-md px-3 py-2 text-sm text-white">
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">Req ID</th>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">User</th>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-300">Method</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Amount</th>
                <th className="px-3 py-2 text-center text-sm font-medium text-gray-300">Status</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Date</th>
                <th className="px-3 py-2 text-right text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-3 py-6 text-center text-gray-400">No requests found</td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-white/2 transition-colors">
                    <td className="px-3 py-3 text-sm text-gray-300">{r.id}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xs font-semibold">{r.user[0]}</div>
                        <div className="text-sm text-white">{r.user}</div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-300">{r.method}</td>
                    <td className="px-3 py-3 text-sm text-right text-white">₹{r.amount}</td>
                    <td className="px-3 py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        r.status === 'approved' ? 'bg-green-600 text-white' : r.status === 'rejected' ? 'bg-red-600 text-white' : 'bg-yellow-700 text-white'
                      }`}>{r.status}</span>
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-400 text-right">{r.date}</td>
                    <td className="px-3 py-3 text-right text-sm">
                      <button aria-label={`view-${r.id}`} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/3 hover:bg-white/6 text-white mr-2">
                        <EyeIcon className="w-4 h-4" />
                      </button>

                      {r.status === 'pending' && (
                        <>
                          <button aria-label={`approve-${r.id}`} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-green-600 hover:bg-green-700 text-white mr-2">
                            <CheckIcon className="w-4 h-4" />
                          </button>
                          <button aria-label={`reject-${r.id}`} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white">
                            <XMarkIcon className="w-4 h-4" />
                          </button>
                        </>
                      )}
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

export default Withdrawl;