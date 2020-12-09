import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../UserNav";

function Events() {
  return (
    <>
      <UserNav />
      <div className="events">
        <div className="events__boxes">
          <Link to="/events/news">
            <div>News</div>{" "}
          </Link>
          <Link to="/events/ticket">
            <div>TicketMaster</div>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Events;
