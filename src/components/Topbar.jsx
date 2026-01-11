import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Topbar = ({ collapsed }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const titleMap = {
    "/": "Dashboard",
    "/users": "Users",
    "/bets": "Bets",
    "/withdrawl": "Withdrawl",
    "/payment": "Payment",
    "/reports": "Reports",
  };

  // 🔐 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  // 👇 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={` right-0 z-30
      ${collapsed ? "left-20" : "left-64"}
      flex justify-between items-center
      px-6 py-4
      bg-gray-950/90 backdrop-blur-md
      border-b border-white/10
      transition-all duration-300`}
    >
      <h2 className="text-xl font-semibold text-white">
        {titleMap[pathname] || "Admin"}
      </h2>

      {/* PROFILE */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 focus:outline-none"
        >
          <span className="text-sm text-gray-300">Admin</span>
          <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">
            A
          </div>
        </button>

        {/* DROPDOWN */}
        {open && (
          <div className="absolute right-0 mt-3 w-44 rounded-xl bg-gray-900 border border-white/10 shadow-xl overflow-hidden">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-gray-800"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
  