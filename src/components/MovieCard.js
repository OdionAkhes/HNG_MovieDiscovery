/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const MovieCard = ({ movie }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="relative m-2 w-48" data-testid="movie-card">
      <Link
        to={`/movies/${movie.id}`}
        className="group transition transform group-hover:scale-105 w-full"
      >
  
        <img
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
 
          className="w-full"
        />

        <h3 className="mt-2 text-sm font-medium" data-testid="movie-title">
          {movie.title}
        </h3>

        <p className="text-gray-500 text-xs" data-testid="movie-release-date">
          {movie.release_date}
        </p>
      </Link>

      {/* Heart Icon */}
      <div
        className="absolute top-1 right-1 cursor-pointer h-6 w-6 bg-gray-500 rounded-full p-1 flex justify-center items-center"
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorited(!isFavorited);
        }}
      >
        <i
          className={`fa ${
            isFavorited ? "fa fa-heart text-red-500" : "fa-heart-o text-gray-400"
          }`}
        />
      </div>
    </div>
  );
};

export default MovieCard;
