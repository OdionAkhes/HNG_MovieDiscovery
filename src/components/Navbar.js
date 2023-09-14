/** @format */

import React from "react";
import { useGlobalContext } from "../GlobalContext";

const Navbar = () => {
  const { toggleSidebar, searchQuery, setSearchQuery, handleSearch } =
    useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-opacity-50 ">
      <div className="text-white">Logo</div>

      <form onSubmit={onSubmit} className="flex-grow mx-4 max-w-lg">
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded-md bg-transparent text-white placeholder-white border border-white"
        />
      </form>

      <div className="flex items-center space-x-4">
        <button className="text-white border border-white p-2 rounded">
          Sign in
        </button>
        <button onClick={toggleSidebar} className="text-white">
          Hamburger Icon
        </button>
      </div>
    </div>
  );
};

export default Navbar;
