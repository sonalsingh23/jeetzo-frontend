import { UserGroupIcon, PlayIcon, ChartBarIcon, BanknotesIcon } from "@heroicons/react/24/solid";

const StatCard = ({ title, value, change, changeType, icon, iconBg }) => {
  const isPositive = changeType === "positive";

  return (
    <div className="rounded-2xl bg-[#1e293b]/80 backdrop-blur border border-white/10 p-6 shadow-lg">
      {/* Top row */}
      <div className="flex items-center justify-between mb-6">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>

        {/* Percentage */}
        <span
          className={`text-sm font-semibold ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? "↗" : "↘"} {change}
        </span>
      </div>

      {/* Value */}
      <h2 className="text-3xl font-bold text-white">{value}</h2>

      {/* Title */}
      <p className="text-gray-400 mt-1">{title}</p>
    </div>
  );
};

export default StatCard;



