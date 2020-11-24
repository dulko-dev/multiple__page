import React from "react";
import fire from "../Firebase/firebaseConfig";
import Applications from "./Applications";

function User({ user }) {
  const handleLogOut = (e) => {
    e.preventDefault();

    fire
      .auth()
      .signOut()
      .then(function () {
        console.log("wylogowano");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="user">
      <div className="user__nav">
        <div>
          <h2>Welcome {user}</h2>
          <p>Today is 24 November 2020</p>
          <p>TimeZone : 12:33:02 AM</p>
        </div>
        <div className="user__buttons">
          <button type="button" className="user__nav__button">
            Settings
          </button>
          <button
            type="button"
            onClick={handleLogOut}
            className="user__nav__button"
          >
            Logout
          </button>
        </div>
      </div>
      <Applications />
    </div>
  );
}

export default User;
