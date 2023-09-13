/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SharedLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
