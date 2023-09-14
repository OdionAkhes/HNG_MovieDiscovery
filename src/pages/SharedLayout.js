/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../GlobalContext";

const SharedLayout = () => {
  const { sidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main
        className={` h-screen flex-grow  bg-gray-50 transition-margin duration-300 ${
          sidebarOpen ? "ml-60" : "ml-0"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
