import React, { useEffect, useState } from "react";
import "./App.css";
import searchMovies from "./movieapi";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { DotLoader } from "react-spinners";

/**
 * A component that displays the app.
 * @returns The app component.
 */
function App() {
  const [movies, setMovies] = useState();
  const [inProgress, setInProgress] = useState(false);
  // I have decided to set a default searchTerm - 'justice league'
  const [searchTerm, setSearchTerm] = useState("justice league");

  const getDataFromSearchBar = (data) => {
    setSearchTerm(data);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = await searchMovies(searchTerm);
        setMovies(movieList.Search);
      } catch (error) {
        setMovies([]);
      } finally {
        setInProgress(false);
      }
    };
    setInProgress(true);
    fetchMovies();
  }, [searchTerm]);

  return (
    <>
      <div className="app w-full max-w-[1440px]">
        <div className="m-5 flex justify-center items-center">
          <h1 className="mb-6 text-4xl font-bold">Movie App</h1>
        </div>
        <div className="mb-6">
          <SearchBar sendDataToApp={getDataFromSearchBar} />
        </div>
        {inProgress ? (
          <div className="flex justify-center items-center h-[200px]">
            <DotLoader />
          </div>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </>
  );
}

export default App;
