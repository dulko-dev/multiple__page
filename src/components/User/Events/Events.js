import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../UserNav";
import sport from "../../../assets/sport.png";
import news from "../../../assets/eventNews.jpg";
import ReactTooltip from "react-tooltip";
import { withRouter } from "react-router-dom";
import bg from "../../../assets/events-bg.jpg";

function Events() {
  return (
    <>
      <ReactTooltip
        border
        effect="solid"
        type="dark"
        place="right"
        className="events__tooltip"
      />
      <UserNav />
      <div className="events">
        <img
          alt="background"
          src={bg}
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            left: "0",
            bottom: "0",
            zIndex: "-1",
          }}
        />
        <div className="events__boxes">
          <Link to="/events/news" style={{ width: "200px", outline: "none" }}>
            <div className="events__news" data-tip="current news from world">
              <img src={news} className="events__newsImg" alt="news" />
            </div>
          </Link>
          <Link to="/events/sport" style={{ width: "200px", outline: "none" }}>
            <div
              className="events__sport"
              data-tip="results from football and basketball"
            >
              <img
                src={sport}
                className="events__sportImg"
                alt="sport result"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default withRouter(Events);
