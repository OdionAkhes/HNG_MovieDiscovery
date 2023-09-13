/** @format */

import React, { useState, useEffect } from "react";
import { fetchTopRatedMovies, searchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

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

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const results = await searchMovies(query);
      setMovies(results);
      setLoading(false);
    } catch (error) {
      console.error("Error searching movies:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
                  <div>
        
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
