import React from "react";

const apiKey = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

const searchMovies = async ({ query }) => {
  try {
    const res = await fetch(`${apiKey}&s=${query}`);
    const data = await res.json();
    // setMovies(data)
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    // setMovies([])
    return [];
  }
};

export default searchMovies;
