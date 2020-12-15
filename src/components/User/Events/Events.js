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
            <div className='events__news'>News</div>
          </Link>
          <Link to="/events/sport">
            <div className='events__ticketMaster'>Sport</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Events;
