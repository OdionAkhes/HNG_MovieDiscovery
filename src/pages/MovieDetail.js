
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchMovieDetails } from "../api/tmdb";
const MovieDetail = () => {
    const { id } = useParams()
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

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail