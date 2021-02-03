import React, { useState } from "react";
import UserNav from "../UserNav";
import MovieDataInfo from "./MovieDataInfo";
import PersonDataInfo from "./PersonDataInfo";
import ShowDataInfo from "./ShowDataInfo";

function MoviesDataBase() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("movie");
  const API_KEY = "834b38bde83678813d5541bcdb78dead";

  console.log(data);

  const apiFetchMovie = async () => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}&language=en&page=1`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  };
  const apiFetchShows = async () => {
    await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${input}&language=en&page=1`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  };
  const apiFetchPerson = async () => {
    await fetch(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${input}&language=en&page=1`
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
    if (search === "movie") {
      apiFetchMovie();
    } else if (search === "show") {
      apiFetchShows();
    } else if (search === "person") {
      apiFetchPerson();
    }
    setInput("");
    setShow(true);
  };

  return (
    <>
      <UserNav />
      <div className="moviesDataBase">
        <form onSubmit={handleSubmit} className="movieDataBase__form">
          <h2 className="movieDataBase__title">Search Engine</h2>
          <select
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="movieDataBase__search"
          >
            <option value="movie">Movie</option>
            <option value="show">Tv Shows</option>
            <option value="person">Person</option>
          </select>
          <input
            className="movieDataBase__input"
            type="text"
            onChange={handleInput}
            value={input}
          />
          <button type="submit" className="movieDataBase__btn">
            Search
          </button>
        </form>
        {show && (
          <div className="movieDataBase__wrapper">
            {data.map((datas) => (
              <div className="movieData" key={datas.id}>
                <MovieDataInfo datas={datas} />
                {/* <ShowDataInfo />
                  <PersonDataInfo /> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MoviesDataBase;

//
