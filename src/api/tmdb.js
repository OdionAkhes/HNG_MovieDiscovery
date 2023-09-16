/** @format */

import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log("API Key is:", API_KEY);

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchMovieDetails = async (id) => {
  try {
    const response = await instance.get(`/movie/${id}`);
    const creditsResponse = await instance.get(`/movie/${id}/credits`);

    const director = creditsResponse.data.crew.find(
      (member) => member.job === "Director"
    );

    const writers = creditsResponse.data.crew.filter(
      (member) => member.job === "Writer" || member.job === "Screenplay"
    );

    const stars = creditsResponse.data.cast.slice(0, 3); // Top 3 actors

    return {
      ...response.data,
      director: director ? director.name : "N/A",
      writers: writers.map((writer) => writer.name).join(", "),
      stars: stars.map((star) => star.name).join(", "),
    };
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

export const fetchHeroMovie = async () => {
  try {
    const heroMovieTitle = "John Wick 3"; 
    const results = await searchMovies(heroMovieTitle);

    if (results && results.length) {
      return results[0]; 
    }
    throw new Error("Hero movie not found");
  } catch (error) {
    console.error("Failed to fetch hero movie", error);
    throw error;
  }
};
