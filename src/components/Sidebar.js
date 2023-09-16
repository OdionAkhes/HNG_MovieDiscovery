/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFilm,
  faTv,
  faCalendarAlt,

  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <aside
      className={`p-4 w-60 fixed top-0 left-0 h-full bg-white transform transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={toggleSidebar} className="text-black" >
        <Logo/>
      </button>

      <NavLink
        to="/"
        className="block mt-6 mb-4 hover:bg-red-100 hover:border-r-4 hover:border-red-500 p-4 rounded"
      >
        <FontAwesomeIcon icon={faHome} className="mr-2" />
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className="block mb-4 hover:bg-red-100 hover:border-r-4 hover:border-red-500 p-4 rounded"
      >
        <FontAwesomeIcon icon={faFilm} className="mr-2" />
        Movies
      </NavLink>

      <NavLink
        to="/tv-series"
        className="block mb-4 hover:bg-red-100 hover:border-r-4 hover:border-red-500 p-4 rounded"
      >
        <FontAwesomeIcon icon={faTv} className="mr-2" />
        TV Series
      </NavLink>

      <NavLink
        to="/upcoming"
        className="block mb-4 hover:bg-red-100 hover:border-r-4 hover:border-red-500 p-4 rounded"
      >
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
        Upcoming
      </NavLink>

      <div className="block mb-4 p-3 bg-red-100 hover:bg-red-200 border border-red-500 rounded self-center text-center">
        <h3 className="font-semibold">
          Play movie quizzes and earn free tickets
        </h3>
        <p className="text-sm mt-2">50k people are playing now</p>
        <button className="mt-2 text-red-500 bg-red-200 p-2 rounded-full hover:bg-red-300">
          Start playing
        </button>
      </div>

      <button className="mt-auto block w-full hover:bg-red-100 hover:border-r-4 hover:border-red-500 p-4 rounded self-center">
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
