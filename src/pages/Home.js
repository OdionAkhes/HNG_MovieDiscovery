/** @format */

import React, { useState, useEffect } from "react";
import { fetchTopRatedMovies, searchMovies } from "../api/tmdb";
import { useGlobalContext } from "../GlobalContext";
import MovieCard from "../components/MovieCard";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const Home = ({toggleSidebar}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { heroMovie, setHeroMovie } = useGlobalContext(); 
  useEffect(() => {
    async function fetchData() {
      try {
        const topMovies = await fetchTopRatedMovies();
        setMovies(topMovies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);


  return (
    <div className="">
      <HeroSection movie={heroMovie} />
      <div className=" ">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
