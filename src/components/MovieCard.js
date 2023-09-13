/** @format */

import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div data-testid="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <h3 data-testid="movie-title">{movie.title}</h3>
        <p data-testid="movie-release-date">{movie.release_date}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
