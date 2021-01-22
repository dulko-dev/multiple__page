import React, { useState } from "react";
import UserNav from "../UserNav";
import MovieData from "./MovieData";

function MoviesDataBase() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

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

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    apiFetch();
    // setInput("");
    setShow(true);
  };

  return (
    <>
      <UserNav />
      <div className="moviesDataBase">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleInput}
            value={input}
            placeholder="find movies, tv shows and more..."
          />
          <button type="submit">Search</button>
        </form>
        {show && (
          <>
            <h3>Result for '{input}'</h3>
            <h3>Titles</h3>
            <div className="movieDataBase__wrapper">
              {data.map((movie) => (
                <MovieData
                  movie={movie}
                  input={input}
                  key={movie.id}
                  API_KEY={API_KEY}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MoviesDataBase;

//
