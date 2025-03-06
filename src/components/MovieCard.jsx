import React from "react";

const MovieCard = ({ movie }) => {

  return (
    <div className="mt-6 max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg w-full"
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className="p-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.Type}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.Title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
