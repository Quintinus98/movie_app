import React from "react";
import searchIcon from "../assets/search.svg";

const SearchBar = () => {
  return (
    <div>
      <form className="flex items-center max-w-sm mx-auto">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img src={searchIcon} width={20} height={20} alt="search" />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Search for movies"
            value={"batman"}
            onChange={() => {}}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
