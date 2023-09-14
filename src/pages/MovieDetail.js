/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/tmdb";
import Sidebar from "../components/Sidebar";

const MovieDetail = () => {
  const { id } = useParams(); // To get the movie id from the URL.
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError("Failed to fetch movie details. Please try again later.");
      }
    };
    fetchDetails();
  }, [id]);

  if (error) {
    return (
      <div className="flex min-h-screen">

        <div className="flex-1 bg-gray-100 p-6">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex min-h-screen">

        <div className="flex-1 bg-gray-100 p-6">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">

      <div className="flex-1 bg-gray-100 p-6">
        <h1 data-testid="movie-title">{movie.title}</h1>
        <p data-testid="movie-release-date">
          Release Date: {movie.release_date}
        </p>
        <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
        <p data-testid="movie-overview">{movie.overview}</p>
      
      </div>
    </div>
  );
};

export default MovieDetail;
