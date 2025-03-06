import React from "react";
import MovieCard from "./MovieCard";

/**
 * A component that renders a list of movies as a grid of MovieCard components.
 * If no movies are found, it displays a message indicating that no movies were found.
 * @param {Object[]} movies - An array of movie objects to be displayed.
 * @param {string} movies[].imdbID - The unique identifier for each movie.
 */

const MovieList = ({ movies }) => {
  return (
    <div>
      <div className="pt-5 flex flex-row items-center">
        {movies?.length > 0 ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="mx-auto py-10">
            <h1>No Movies found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
