/** @format */

import React, { useState, useEffect } from "react";
import { fetchMovieDetails, fetchTopRatedMovies } from "../api/tmdb";
import { useParams } from "react-router-dom";
import { FaList, FaStar } from "react-icons/fa";

const MovieDetail = () => {
  const { id: movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    async function loadMovieDetails() {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    async function loadTopRatedMovies() {
      try {
        const movies = await fetchTopRatedMovies();
        setTopRatedMovies(movies);
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      }
    }

    loadMovieDetails();
    loadTopRatedMovies();
  }, [movieId]);

  return (
    <div className="container mx-auto mt-10 px-8">
      <div className="relative mb-8">
        <div className="h-64 w-full bg-gray-200"></div>
        <button className="absolute bottom-4 left-4 bg-black text-white py-1 px-4 rounded">
          <span>🔍</span> Watch Trailer
        </button>
      </div>

      <div className="flex">
        <div className="w-2/3 pr-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="inline text-xl">
                {movieDetails.title} (
                {new Date(movieDetails.release_date).getFullYear()})
              </h1>
              <span className="ml-2 text-red-500">
                {movieDetails.genres?.map((genre) => (
                  <span key={genre.id} className="mr-2">
                    {genre.name}
                  </span>
                ))}
              </span>
            </div>
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              {movieDetails.vote_average}
            </div>
          </div>

          <p>PG · {movieDetails.runtime} min</p>

       <div className="mt-2">
  <p>Director: {movieDetails.director}</p>
  <p>Writers: {movieDetails.writers}</p>
  <p>Stars: {movieDetails.stars}</p>
</div>
          <div className="mt-4">
            <button className="bg-red-500 text-white py-1 px-4 mr-2 rounded">
              Top rated movie #65
            </button>
            <select className="border bg-white rounded py-1 px-4">
              <option>Awards: 9 nominations</option>
              {/* Other options can be added here */}
            </select>
          </div>
        </div>

        <div className="w-1/3">
          <div className="mb-4">
            <button className="bg-red-600 text-white py-2 px-4 mb-2 rounded block w-full">
              See Showtimes
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded block w-full flex items-center">
              <FaList className="mr-2" />
              More Watch Options
            </button>
          </div>

          <div className="bg-gray-100 p-4 rounded relative">
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 py-2 px-4">
              Best movies and shows in September
            </div>
            <div className="flex mt-4">
              {topRatedMovies.slice(0, 3).map((movie) => (
                <div key={movie.id} className="w-1/3 pr-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
