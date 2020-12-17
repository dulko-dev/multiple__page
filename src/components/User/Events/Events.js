import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../UserNav";
import sport from "../../../assets/sport.png";
import news from "../../../assets/eventNews.jpg";
import ReactTooltip from "react-tooltip";

function Events() {
  return (
    <>
      <ReactTooltip
        border
        effect="solid"
        type="dark"
        className="events__tooltip"
      />
      <UserNav />
      <div className="events">
        <div className="events__boxes">
          <Link to="/events/news">
            <div className="events__news" data-tip="current news from world">
              <img src={news} className="events__newsImg" alt='news'/>
            </div>
          </Link>
          <Link to="/events/sport">
            <div
              className="events__sport"
              data-tip="results from football and basketball"
            >
              <img src={sport} className="events__sportImg" alt='sport result'/>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Events;
