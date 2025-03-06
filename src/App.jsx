import React, { useEffect, useState } from "react";
import "./App.css";
// import searchMovies from "./movieapi";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";


const apiKey = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

/**
 * A component that displays the app.
 * @returns The app component.
 */
function App() {
  const [movies, setMovies] = useState();

  const searchMovies = async ({query}) => {
      try {
        const res = await fetch(`${apiKey}&s=${query}`);
        const data = await res.json();
        console.log(data.Search)
        setMovies(data.Search)
        // return data;
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([])
        // return [];
      }
    };
  useEffect(() => {
    
    searchMovies("batman")
  }, []);

  // const movie = {
  //   Title: "Batman Begins",
  //   Year: "2005",
  //   imdbID: "tt0372784",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg",
  // };

  return (
    <>
      <div className="app w-full">
        <div className="m-5 flex justify-center items-center">
          <h1 className="mb-6 text-4xl font-bold">Movie App</h1>
        </div>
        <div className="mb-6">
          <SearchBar />
        </div>
        <div className="pt-5">
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div>
              <h2>No Movies found</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
