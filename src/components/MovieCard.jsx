import React from "react";

/**
 * A component that renders a movie card with a poster, title, and year.
 * @param {{ Poster: string, Title: string, Type: string, Year: string }} movie - The movie object to be displayed on the card.
 * @returns {ReactElement} A JSX element representing the movie card.
 */
const MovieCard = ({ movie }) => {
  return (
    <div className="mt-6 max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg w-full"
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className="p-2">
        <div className="flow-root">
          <h5 className="float-left mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.Type}
          </h5>

          <h5 className="float-right my-2 bg-gray-400 p-1 rounded-lg text-sm text-gray-900 mr-2 mb-2">
            {movie.Year}
          </h5>
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.Title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
