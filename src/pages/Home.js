/** @format */

import React, { useState, useEffect } from "react";
import { fetchTopRatedMovies, searchMovies } from "../api/tmdb";
import { useGlobalContext } from "../GlobalContext";
import MovieCard from "../components/MovieCard";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const Home = ({ toggleSidebar }) => {
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
   <div className="w-full">
     <HeroSection movie={heroMovie} />
     <div className="mt-8 px-4">
       {" "}
     
       <div className="flex justify-between items-center mb-4 px-10 mx-10">
         <h2 className="text-xl ">Featured Movies</h2>
         <span className="text-red-500 cursor-pointer hover:underline">
           See More >
         </span>
       </div>
       {loading ? (
         <LoadingSpinner />
       ) : (
         <div className="flex justify-center">

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12 ">
             {" "}

             {movies.map((movie) => (
               <div key={movie.id} className="mb-8">
                 <MovieCard movie={movie} />
               </div>
             ))}
           </div>
         </div>
       )}
     </div>
     <Footer />
   </div>
 );
};

export default Home;
