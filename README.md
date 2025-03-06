# Movie App

This is a React application named `Movie App`. It displays a movie app with a search bar and a list of movies.

Here's a breakdown of what the code does:

1. It initializes three state variables: `movies`, `inProgress`, and `searchTerm`.

   - `movies` stores the list of movies.
   - `inProgress` tracks whether the app is currently fetching movies.
   - `searchTerm` stores the user's search query, defaulting to "justice league".

2. It defines a function `getDataFromSearchBar` that updates the `searchTerm` state when the user submits a search query.

3. It uses the `useEffect` hook to fetch movies when the `searchTerm` changes.

   - It sets `inProgress` to `true` while fetching movies.
   - It calls the `searchMovies` function (imported from `./movieapi`) with the current `searchTerm`.
   - It updates the `movies` state with the fetched movie list.
   - It sets `inProgress` to `false` when the fetch is complete.

4. It renders the app's UI, which includes:
   - A header with the title "Movie App".
   - A search bar (`SearchBar` component) that sends the user's search query to the `getDataFromSearchBar` function.
   - A loading indicator (`DotLoader`) if the app is currently fetching movies.
   - A list of movies (`MovieList` component) if the fetch is complete.

## How to Setup the Movie App

1. Clone the repository
2. run `npm install`
3. Setup the env variable (see below for how to do it.)
3. run `npm run dev`

## Live Demo of the Movie App

Copy the link to your browser.

```sh
https://movie-app-dso.netlify.app/
```

## Setting Up the env variable
1. Visit http://www.omdbapi.com/apikey.aspx
2. Choose the FREE tier (1,000 daily limit)
3. Fill in the form with:
    - Your email address
    - Purpose: "Educational/Learning"
4. Check your email for the API key (usually arrives within minutes)
5. Test your API key using this format:
    - http://www.omdbapi.com/?apikey=YOUR_KEY_HERE&s=batman
6. Create a .env file in the root of the your project folder
7. Update the .env file with `VITE_OMDB_API_KEY=YOUR_KEY_HERE`
8. You're good to go