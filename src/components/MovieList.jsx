import React from "react";
import MovieCard from "./MovieCard";

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
