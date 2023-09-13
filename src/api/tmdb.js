/** @format */

import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchMovieDetails = async (id) => {
  try {
    const response = await instance.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie details", error);
    throw error;
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await instance.get("/movie/top_rated");
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.error("Failed to fetch top rated movies", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await instance.get("/search/movie", {
      params: {
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Failed to search movies", error);
    throw error;
  }
};
