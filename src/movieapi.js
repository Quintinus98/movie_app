import React from "react";

const apiKey = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

const searchMovies = async (query) => {
  try {
    const res = await fetch(`${apiKey}&s=${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export default searchMovies;
