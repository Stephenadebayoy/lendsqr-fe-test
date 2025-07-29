/** @format */

"use client";

import { useState } from "react";
import "./style.scss";
import { Header, Sidebar } from "..";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="dashboard">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div
          className={`dashboard__main ${
            sidebarOpen ? "dashboard__main--sidebar-open" : ""
          }`}
        >
          <main className="dashboard__content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
