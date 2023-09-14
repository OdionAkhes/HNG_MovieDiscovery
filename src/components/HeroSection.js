/** @format */

import React from "react";
import Navbar from "./Navbar";

const HeroSection = ({ movie }) => {
  if (!movie) return null;

  return (
    <div
      className="relative h-[600px] bg-cover"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
      }}
    >
      <Navbar />
      <div className="absolute top-1/4 left-4 max-w-xl">
        <h2 className="text-4xl font-bold text-white">{movie.title}</h2>
        <div className="flex space-x-4">
          <span className="text-white">IMDb: {movie.vote_average}</span>
          {/* Placeholder for Rotten Tomatoes data: */}
          <span className="text-white">Rotten Tomatoes: 90%</span>
        </div>
        <p className="text-white mt-2">{movie.overview}</p>
        <button className="mt-4 bg-red-500 p-2 rounded">Watch Trailer</button>
      </div>
    </div>
  );
};

export default HeroSection;
