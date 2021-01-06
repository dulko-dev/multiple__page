import React from "react";
import { Link } from "react-router-dom";
import todoPhoto from "../../../assets/to-do-list.jpg";
import newsEvents from "../../../assets/news.jpg";
import forecast from "../../../assets/weather.jpeg";
import movies from "../../../assets/movie.png";
import calculator from "../../../assets/calculator.jpg";

function Applications() {
  return (
    <div className="applications">
      <div className="applications__blockbuster">
        <div className="app__common app__todo">
          <Link to="./to-do-list">
            <img src={todoPhoto} alt="todo list" />
          </Link>
        </div>
        <div className="app__common app__info">
          <Link to="./events">
            <img src={newsEvents} alt="news and events" />
          </Link>
        </div>
        <div className="app__common">
          <Link to="./weather">
            <img
              src={forecast}
              alt="weather forecast"
              className="app__weather"
            />
          </Link>
        </div>
        <div className="app__common app__fun">
          <Link to="./movies">
            <img src={movies} alt="movies" />
          </Link>
        </div>
        {/*/ quiz / movies and serial /books */}
        <div className="app__common app__calculator">
          <Link to="calculator">
            <img src={calculator} alt="calculator" />
          </Link>
        </div>
        {/* - financial / healthy */}
      </div>
    </div>
  );
}

export default Applications;
