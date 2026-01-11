import { NavLink } from "react-router-dom";

const Sidebar = ({ collapsed, toggle }) => {
  return (
   <aside
  className={`fixed left-0 top-0 z-40
  ${collapsed ? "w-20" : "w-64"}
- bg-gray-950
+ bg-gray-950/90 backdrop-blur-md
+ border-r border-white/10
  h-screen px-4 py-6 transition-all duration-300`}
>

      {/* Logo */}
      <div className="flex items-center justify-between mb-10">
        {!collapsed && (
          <h1 className="text-xl font-bold text-yellow-400">
            JEETZO
          </h1>
        )}
        <button
          onClick={toggle}
          className="text-gray-400 hover:text-white"
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <nav className="space-y-3">
        <MenuItem to="/" label="Dashboard" collapsed={collapsed} />
        <MenuItem to="/users" label="Users" collapsed={collapsed} />
         <MenuItem to="/bets" label="Bets" collapsed={collapsed} />
        <MenuItem to="/withdrawl" label="Withdrawals" collapsed={collapsed} />

        <MenuItem to="/payment" label="Payment Setting" collapsed={collapsed} />
         <MenuItem to="/reports" label="Reports" collapsed={collapsed} />
      </nav>
    </aside>
  );
};

const MenuItem = ({ to, label, collapsed }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg transition
      ${
        isActive
          ? "bg-yellow-400 text-black"
          : "text-gray-300 hover:bg-gray-800"
      }`
    }
  >
    {!collapsed && <span>{label}</span>}
  </NavLink>
);

export default Sidebar;
