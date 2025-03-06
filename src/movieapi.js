import React from "react";

const apiKey = `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

/**
 * Searches for movies by title.
 *
 * @param {string} query - The query string to search for.
 * @returns {Promise<Object>} A promise that resolves with the search result.
 * @throws {Error} If there is an error fetching movies.
 */
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
