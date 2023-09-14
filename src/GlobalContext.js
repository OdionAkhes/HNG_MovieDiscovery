/** @format */

import React, { useEffect,createContext, useContext, useState } from "react";
import { fetchHeroMovie, searchMovies } from "./api/tmdb"; 
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [heroMovie, setHeroMovie] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
      setLoading(false);
    } catch (error) {
      console.error("Error searching movies:", error);
      setLoading(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    async function getHeroMovie() {
      try {
        const movie = await fetchHeroMovie();
        setHeroMovie(movie);
      } catch (error) {
        console.error("Error fetching hero movie:", error);
      }
    }

    getHeroMovie();
  }, []);
      const addToFavorites = (movie) => {
        setFavorites([...favorites, movie]);
      };

      const removeFromFavorites = (movie) => {
        const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
        setFavorites(updatedFavorites);
      };

  return (
    <GlobalContext.Provider
      value={{
        toggleSidebar,
        favorites,
        setFavorites,
        sidebarOpen,
        setSidebarOpen,
        heroMovie,
        searchQuery,
        setSearchQuery,
        searchResults,
        handleSearch,
        loading,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};
