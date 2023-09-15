/** @format */

// MovieDetail.js
import React, { useState, useEffect } from "react";
import { fetchMovieDetails, fetchTopRatedMovies } from "../api/tmdb";
import { useGlobalContext } from "../GlobalContext";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id: movieId } = useParams(); // Getting movieId directly from the URL params
  const [movieDetails, setMovieDetails] = useState({});
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const { addToFavorites, removeFromFavorites, favorites } = useGlobalContext();

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

  const isFavorite = favorites.some((fav) => fav.id === movieDetails.id);

 

  return (
    <div className="container mx-auto mt-10 p-8">
   
      <div className="relative mb-8">
      
        <div className="h-64 w-full bg-gray-200"></div>
        <button className="absolute bottom-4 left-4 bg-black text-white py-1 px-4 rounded">
          Watch Trailer
        </button>
      </div>
      
      <div className="flex">

        <div className="w-2/3 pr-4">
          <h1 className="text-2xl font-bold mt-4">
            {movieDetails.title} (
            {new Date(movieDetails.release_date).getFullYear()})
          </h1>
          <p>PG · {movieDetails.runtime} min</p>

          <div className="text-red-500 my-2">
            {movieDetails.genres?.map((genre) => (
              <span key={genre.id} className="mr-2">{genre.name}</span>
            ))}
          </div>


          <div className="mb-4">
            <p>{movieDetails.overview}</p>
          </div>


          <div>
     
            <p>Director: [Director's Name]</p>
            <p>Writers: [Writer's Names]</p>
            <p>Stars: [Star Names]</p>
          </div>

     
          <div className="mt-4">
            <p>Top rated movie #65</p>
            <p>Awards: 9 nominations</p>
          </div>
        </div>


        <div className="w-1/3">
  
          <div className="mb-4">
            <p className="font-bold text-xl">
              {movieDetails.vote_average} / 10
            </p>
            <p>{movieDetails.popularity} views</p>
          </div>


          <div className="mb-4">
            <button className="bg-blue-600 text-white py-2 px-4 mb-2 rounded block w-full">
              See Showtimes
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded block w-full">
              More Watch Options
            </button>
          </div>

     
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="font-bold mb-4">Best movies and shows in September</h2>
            <ul>
              {topRatedMovies.slice(0, 3).map((movie) => (
                <li key={movie.id} className="mb-2">
                  <span className="mr-2">{movie.title}</span>
                  <button
                    className={`px-2 py-1 rounded ${
                      isFavorite ? "bg-red-600 text-white" : "bg-gray-300"
                    }`}
                    onClick={() =>
                      isFavorite
                        ? removeFromFavorites(movie)
                        : addToFavorites(movie)
                    }
                  >
                    {isFavorite ? "Remove" : "Add"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;






