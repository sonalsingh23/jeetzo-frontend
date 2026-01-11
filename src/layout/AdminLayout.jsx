import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Particles from "../components/Particles";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
 <div className="
  h-screen overflow-hidden
  bg-gradient-to-br
  from-slate-950
  via-slate-900
  to-slate-950
">

      {/* Sidebar (Fixed) */}
      <Sidebar
        collapsed={collapsed}
        toggle={() => setCollapsed(!collapsed)}
      />

      {/* Main Content Wrapper */}
      <div
        className={`${
          collapsed ? "ml-20" : "ml-64"
        } transition-all duration-300 relative z-10`}
      >
        {/* Background Particles */}
        <Particles />

        {/* Topbar (Fixed) */}
        <Topbar collapsed={collapsed} />

        {/* Scrollable Content ONLY */}
        <main
          className="
            pt-10
            h-[calc(100vh-5rem)]
            overflow-y-auto
            px-4 md:px-6 lg:px-8
          "
        >
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
