import React from "react";
import { Link } from "react-router-dom";
import todoPhoto from "../../../assets/to-do-list.jpg";
import newsEvents from "../../../assets/news.jpg";
import forecast from "../../../assets/weather.jpeg";
import movies from "../../../assets/movie.png";
import calculator from "../../../assets/calculator.jpg";
import Support from "../../Utility/Support/Support";

function Applications() {
  return (
    <>
      <div className="applications">
        <div className="applications__blockbuster">
          <div className="app__common app__todo">
            <p className="app__paragraph">Schedule of your day</p>
            <Link to="./to-do-list">
              <img src={todoPhoto} alt="todo list" />
            </Link>
          </div>
          <div className="app__common app__info">
            <p className="app__paragraph">What's on the world</p>
            <Link to="./events">
              <img src={newsEvents} alt="news and events" />
            </Link>
          </div>
          <div className="app__common app__weather">
            <p className="app__paragraph">Take a look the weather forecast</p>
            <Link to="./weather">
              <img src={forecast} alt="weather forecast" />
            </Link>
          </div>
          <div className="app__common app__fun">
            <p className="app__paragraph">Chill and find movie</p>
            <Link to="./movies">
              <img src={movies} alt="movies" />
            </Link>
          </div>
          <div className="app__common app__calculator">
            <p className="app__paragraph">Check your finance and health</p>
            <Link to="calculator">
              <img src={calculator} alt="calculator" />
            </Link>
          </div>
        </div>
        <div className="support__modal"></div>
      </div>
    </>
  );
}

export default Applications;
