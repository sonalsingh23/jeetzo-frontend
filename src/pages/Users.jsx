import { useState } from "react";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/solid";

const initialUsers = [
  { id: 1, name: "Aarav Sharma", email: "aarav@example.com", status: "active", joined: "2025-11-02" },
  { id: 2, name: "Meera Patel", email: "meera@example.com", status: "inactive", joined: "2025-09-14" },
  { id: 3, name: "Rohan Iyer", email: "rohan@example.com", status: "active", joined: "2025-10-01" },
];

const Users = () => {
  const [users] = useState(initialUsers);

  return (
    <div className="p-6 md:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <p className="text-gray-400 mt-1">Manage users, view details, and perform actions.</p>
      </div>

      <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Joined</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800">
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-400">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.id} className="hover:bg-white/2 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-medium">{u.name.split(" ")[0][0]}</div>
                        <div>
                          <div className="text-sm font-medium text-white">{u.name}</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{u.email}</td>

                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${u.status === 'active' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                        {u.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{u.joined}</td>

                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                      <button aria-label={`view-${u.id}`} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/3 hover:bg-white/6 text-white mr-2">
                        <EyeIcon className="w-4 h-4" /> View
                      </button>

                      <button aria-label={`delete-${u.id}`} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white">
                        <TrashIcon className="w-4 h-4" /> Delete
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

export default Users;
