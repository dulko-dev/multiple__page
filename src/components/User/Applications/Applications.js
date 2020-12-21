import React from "react";
import { Link } from "react-router-dom";
import todoPhoto from "../../../assets/to-do-list.jpg";
import newsEvents from "../../../assets/news.jpg";
import forecast from "../../../assets/weather.jpeg";
import entertainment from "../../../assets/entertainment.jpg";
import calculator from "../../../assets/calculator.jpg";

function Applications() {
  return (
    <div className="applications">
      <div className="applications__blockbuster">
        <Link to="./to-do-list">
          <div className="app__common app__todo">
            <img src={todoPhoto} alt="todo list" />
          </div>
        </Link>
        <Link to="./events">
          <div className="app__common app__info">
            <img src={newsEvents} alt="news and events" />
          </div>
        </Link>
        <Link to="./weather">
          <div className="app__common">
            <img
              src={forecast}
              alt="weather forecast"
              className="app__weather"
            />
          </div>
        </Link>
        <Link to="./entertainment">
          <div className="app__common app__fun">
            <img src={entertainment} alt="entertainment" />
          </div>
          {/* - 9gag / quiz / movies and serial /books */}
        </Link>
        <Link to="calculator">
          <div className="app__common app__calculator">
            <img src={calculator} alt="calculator" />
          </div>
          {/* - financial / healthy */}
        </Link>
      </div>
    </div>
  );
}

export default Applications;
