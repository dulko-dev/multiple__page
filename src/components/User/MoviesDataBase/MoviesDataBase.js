import React, { useState } from "react";
import UserNav from "../UserNav";
import MovieData from "./MovieData";

function MoviesDataBase() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const apiFetch = async () => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}&language=pl`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  };

  const apiFetch2 = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/343611?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  apiFetch2();
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    apiFetch();
  };

  return (
    <>
      <UserNav />
      <div className="moviesDataBase">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInput} value={input} />
          <button type="submit">Search</button>
        </form>
        {data.map((movie) => (
          <MovieData movie={movie} />
        ))}
      </div>
    </>
  );
}

export default MoviesDataBase;

//
